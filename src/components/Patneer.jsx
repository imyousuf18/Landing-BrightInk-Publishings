import React from "react";

export default function Patneer() {
  return (
    <section
      className=" py-15 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/asset/images/partneer.png')" }}
    >
      <div className="text-white text-center space-y-5 p-5">
        <h1 className="text-xl md:text-4xl pb-5">Partner with a Trusted Book Publishing Company</h1>
        <p className="w-full md:w-3xl mx-auto">
          At bright ink publishings , we go beyond traditional self-publishing
          services. We become your dedicated partner—guiding you through every
          stage of the journey, from refining your manuscript to achieving a
          successful book launch.
        </p>
        <p className="w-full md:w-4xl mx-auto">
          With industry expertise, personalized support, and a results-driven
          approach, we help position your book for long-term visibility and
          growth. Now is the time to share your story with the world. Connect
          with us by clicking the button below or call (737) 320-5889 to begin
          your publishing journey today.
        </p>
        <div className="flex flex-row items-center justify-center gap-6 mt-4 flex-wrap">
          <a href="#contact" className="bg-gradient-to-r from-[#F5BC24] to-[#AF530E] text-white p-2 px-5 rounded-full inline-block transition flex flex-row items-center gap-2 whitespace-nowrap">
            sign up & claim your discount
          </a>
          <span className="flex flex-row items-center gap-2 px-3 py-2 rounded-full transition duration-200 hover:bg-gradient-to-r hover:from-[#F5BC24] hover:to-[#AF530E] hover:text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.91.91a16.001 16.001 0 006.586 6.586l.91-.91a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>
            <a href="tel:+17373205889" className="no-underline">(737) 320-5889</a>
          </span>
        </div>
      </div>
    </section>
  );
}
