import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script'
import "./globals.css";
import LiveChatScript from "../components/LiveChatScript ";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BrightInk Publishings — Professional Book Publishing Services",
  description:
    "BrightInk Publishings offers professional book publishing services including editing, cover design, formatting, audiobook production, and global distribution. Start your publishing journey today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="google-site-verification" content="YJCP-F5X8QRIT_1PoMjel39J7WIJ7yYBSX-WUXvUVUU" />
        {/* Global Site Tag (gtag.js) - Google Ads / Analytics */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=GTM-WMTGHDBG'+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WMTGHDBG');
    `,
          }}
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMTGHDBG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <LiveChatScript />
      </body>
    </html>
  );
}
