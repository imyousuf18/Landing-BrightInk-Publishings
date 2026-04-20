import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Basic validation
    if (!firstName || !email || !message) {
      return Response.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "BrightInk Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      subject: `New Inquiry from ${firstName} ${lastName || ""}`.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b45309; border-bottom: 2px solid #b45309; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">First Name:</td>
              <td style="padding: 8px 0;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Last Name:</td>
              <td style="padding: 8px 0;">${lastName || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
            Sent via BrightInk Publishing contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error details:", JSON.stringify(error, null, 2));
      return Response.json({ error: "Failed to send email.", details: error.message }, { status: 500 });
    }

    console.log("Email sent successfully, ID:", data?.id);

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Server error:", err);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
