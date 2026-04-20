"use client";

import { useState } from "react";
import Image from "next/image";

function ServiceCard({ service }) {
  return (
    <div className="bg-black text-white rounded-t-3xl p-4 text-center shadow-lg">
      <div className="rounded-2xl overflow-hidden mb-6">
        <Image
          src={service.img}
          width={400}
          height={250}
          alt={service.title}
          className="object-cover w-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-400 text-sm mb-6">{service.desc}</p>
      <button className="border px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition cursor-pointer">
        Read More
      </button>
    </div>
  );
}

export default function PublishingServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Easy To Understand",
      img: "/asset/images/understandd.png",
      desc: "Promote your book with powerful marketing strategies that increase visibility and help you reach the right audience.",
    },
    {
      title: "Book Editing",
      img: "/asset/images/turn.png",
      desc: "Professional editing services to improve clarity, structure, and quality, ensuring your manuscript is polished and ready.",
    },
    {
      title: "Audiobook Production",
      img: "/asset/images/music.png",
      desc: "Turn your book into a professionally narrated audiobook, delivering your story to modern listeners everywhere.",
    },
    {
      title: "Book Cover Design",
      img: "/asset/images/cover.png",
      desc: "Creative and eye-catching book covers that instantly grab attention and make a lasting first impression.",
    },
    {
      title: "Blog & Article Writing",
      img: "/asset/images/blog.png",
      desc: "Engaging blog posts and articles that strengthen your author brand and grow your audience online.",
    },
    {
      title: "Book Publishing",
      img: "/asset/images/edited.png",
      desc: "Complete publishing support to bring your book to life — from manuscript to market-ready in every format.",
    },
  ];

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? services.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === services.length - 1 ? 0 : i + 1));

  return (
    <section id="services" className="py-10 md:py-20 bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-600">
          Professional Publishing Services
        </h2>
        <p className="text-gray-600 mt-3">
          Everything you need to write, publish and promote your book.
        </p>
      </div>

      {/* Desktop Grid — 3 columns, visible on md+ */}
      <div className="hidden md:grid max-w-7xl mx-auto px-6 grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* Mobile Carousel — single card, visible below md */}
      <div className="md:hidden max-w-sm mx-auto px-6">
        <ServiceCard service={services[currentIndex]} />
      </div>

      <div className="flex flex-col items-center mt-16 gap-6">

        {/* Carousel arrows — mobile only */}
        <div className="flex gap-4 md:hidden">
          <button
            onClick={prev}
            aria-label="Previous service"
            className="w-10 h-10 rounded-full background text-white cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next service"
            className="w-10 h-10 rounded-full background text-white cursor-pointer"
          >
            →
          </button>
        </div>

        <a
          href="tel:+14067977989"
          className="background text-white px-8 py-2 rounded-full cursor-pointer hover:opacity-90 transition"
        >
          Contact us to get more information
        </a>

      </div>
    </section>
  );
}