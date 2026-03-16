import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Services() {
  return (
    <section id="about" className=" py-10 md:py-20 max-w-7xl  w-full mx-auto">
      <div className="text-center mb-14 px-4">
        <h2 className="text-xl md:text-4xl font-bold text-yellow-600">
          Publishing Services For Every Book Category
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          We provide professional publishing solutions tailored for different
          types of books. From design and editing to printing and global
          distribution, our team ensures your book is crafted to the highest
          standard.
        </p>
      </div>

   

      <div className=" max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4 py-10">

        
        <div className="relative bg-black text-white rounded-3xl p-6 pt-24 shadow-lg">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <Image
              src="/asset/images/advanture.png"
              width={160}
              height={220}
              alt="book"
              className="drop-shadow-xl"
            />
          </div>

          <h3 className="text-2xl font-bold text-yellow-400 py-4 mt-5 text-center">
            Childrens Books
          </h3>

          <ul className="space-y-3 text-gray-300 pl-10">
            <li>• Creative Cover Design</li>
            <li>• Custom Story Illustrations</li>
            <li>• eBook Formatting & Conversion</li>
            <li>• Professional Editing</li>
            <li>• Interior Layout Formatting</li>
            <li>• Book Marketing Assistance</li>
          </ul>
        </div>

        <div className="relative bg-gradient-to-b from-teal-400 to-green-700 text-white rounded-3xl p-6 pt-24 shadow-lg">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <Image
              src="/asset/images/entlett.png"
              width={160}
              height={220}
              alt="book"
              className="drop-shadow-xl"
            />
          </div>

          <h3 className="text-2xl font-bold py-4 mt-5 text-center">
            Art Books
          </h3>

          <ul className="space-y-3 pl-10">
            <li>• Premium Quality Printing</li>
            <li>• Hardcover & Special Binding</li>
            <li>• Custom Layout & Visual Design</li>
            <li>• Image Optimization</li>
            <li>• Professional Interior Formatting</li>
            <li>• Worldwide Distribution</li>
          </ul>
        </div>

        <div className="relative bg-black text-white rounded-3xl p-6 pt-24 shadow-lg">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <Image
              src="/asset/images/cookbooks.png"
              width={160}
              height={220}
              alt="book"
              className="drop-shadow-xl"
            />
          </div>

          <h3 className="text-2xl font-bold text-yellow-400 py-4 mt-7 text-center">
            Cookbooks
          </h3>

          <ul className="space-y-3 text-gray-300 pl-10">
            <li>• Attractive Cover Design</li>
            <li>• Structured Recipe Formatting</li>
            <li>• Professional Content Editing</li>
            <li>• Food Photography Integration</li>
            <li>• Premium Hardcover Printing</li>
            <li>• Global Distribution</li>
          </ul>
        </div>
      </div>
       <div className="flex justify-center items-center gap-4">
            <button className="background text-white px-6 py-3 rounded-full font-semibold">
              Call Now
            </button>

            <button className="background text-white px-6 py-3 rounded-full font-semibold">
              Get In Touch
            </button>
          </div>
    </section>
  );
}
