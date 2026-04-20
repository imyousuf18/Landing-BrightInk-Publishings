import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // Notify the site owner of the new subscriber
    const { data, error } = await resend.emails.send({
      from: "BrightInk Newsletter <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      subject: "New Newsletter Subscriber",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #b45309; border-bottom: 2px solid #b45309; padding-bottom: 8px;">
            New Newsletter Subscriber 🎉
          </h2>
          <p style="font-size: 16px; color: #333;">
            A new visitor has subscribed to the BrightInk newsletter:
          </p>
          <p style="font-size: 18px; font-weight: bold; color: #111;">
            ${email}
          </p>
          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
            Sent via BrightInk Publishing newsletter form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend subscribe error:", JSON.stringify(error, null, 2));
      return Response.json({ error: "Failed to process subscription." }, { status: 500 });
    }

    console.log("Subscription notification sent, ID:", data?.id);
    return Response.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("Subscribe server error:", err);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
