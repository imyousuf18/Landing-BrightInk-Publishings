import React from "react";
import Image from "next/image";

export default function Ebook() {
  return (
    <section
      className=" pt-5 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/asset/images/books.png')" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative  max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-xl md:text-4xl font-bold text-white mb-6">
            Why This eBook Is Worth Your Time.
          </h2>

          <p className="text-gray-300 mb-10">
            This eBook is designed to give you practical insights, clear guidance,
            and actionable strategies you can apply immediately.
          </p>

          {/* ITEM 1 */}
          <div className="flex items-start gap-4 mb-6">
            <Image
              src="/asset/images/understand.png"
              width={40}
              height={40}
              alt="icon"
            />

            <div>
              <h3 className="font-semibold text-lg text-white">
                Easy to Understand
              </h3>
              <p className="text-gray-300">
                Clear explanations and step-by-step insights so you can quickly
                grasp the concepts and start applying them right away.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-start gap-4 mb-6">
            <Image
              src="/asset/images/understand.png"
              width={40}
              height={40}
              alt="icon"
            />

            <div>
              <h3 className="font-semibold text-lg text-white">
                Practical Strategies
              </h3>
              <p className="text-gray-300">
                Learn proven techniques that you can implement immediately
                to improve your results.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-start gap-4">
            <Image
              src="/asset/images/understand.png"
              width={40}
              height={40}
              alt="icon"
            />

            <div>
              <h3 className="font-semibold text-lg text-white">
                Actionable Insights
              </h3>
              <p className="text-gray-300">
                Gain valuable knowledge that helps you take the next step
                with confidence.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center md:pt-20">
          <Image
            src="/asset/images/sassdan.png"
            width={450}
            height={300}
            alt="ebook"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}