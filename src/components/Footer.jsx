import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white pt-16 pb-6 "
      style={{ backgroundImage: "url('/asset/images/footer.png')" }} 
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-7xl px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="relative">
              <img
                src="/asset/images/footerimage.png" 
                alt="Bright Ink Logo"
                className="object-contain "
              />
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
              We Are An Independent Publishing Services Provider And Are Not
              Affiliated, Associated, Authorized, Endorsed By, Or In Any Way
              Officially Connected With Amazon, Kindle Direct Publishing (KDP),
              Barnes & Noble Press, Or Any Of Their Subsidiaries Or Affiliates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-3">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-3">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ&apos;s
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-3">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>Mon-Fri: 9AM–6PM EST</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔗</span>
                <a
                  href="mailto:info@brightinkpublishings.com"
                  className="hover:text-white transition-colors break-all"
                >
                  info@brightinkpublishings.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <a
                  href="tel:+14155201842"
                  className="hover:text-white transition-colors"
                >
                  +1 (415) 520-1842
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          Copyright © 2026 Bright ink publishings All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
