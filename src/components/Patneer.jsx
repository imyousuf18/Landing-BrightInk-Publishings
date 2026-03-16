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
        <button className="background p-2 px-5 rounded-full">
            sign up & claim your discount
        </button>
      </div>
    </section>
  );
}
