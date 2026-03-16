import Image from "next/image";

export default function PublishingServices() {
  const services = [
    {
      title: "Easy To Understand",
      img: "/asset/images/understandd.png",
      desc: "Promote your book with powerful marketing strategies that increase visibility and help you reach the right audience.",
    },
    {
      title: "Book Editing",
      img: "/asset/images/turn.png",
      desc: "Professional editing services to improve  marketing   clarity, structure, and quality, ensuring your manuscript is polished.",
    },
    {
      title: "Audiobook Production",
      img: "/asset/images/music.png",
      desc: "Turn your book into a professionally  marketing   marketing  narrated  marketing  marketing  for modern listeners.",
    },
    {
      title: "Book Cover Design",
      img: "/asset/images/cover.png",
      desc: "Creative and eye-catching book   marketing instantly  marketing  marketing  marketing  covers that instantly grab attention.",
    },
    {
      title: "Blog & Article Writing",
      img: "/asset/images/blog.png",
      desc: "Engaging blog posts and articles ensuring your manuscript  manuscript is polished that strengthen your brand authority.",
    },
    {
      title: "Book Publishing",
      img: "/asset/images/edited.png",
      desc: "Complete publishing support to ensuring your manuscript ensuring your manuscript bring your book to life.",
    },
  ];

  return (
    <section  className="py-10 md:py-20 bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-600">
          Professional Publishing Services
        </h2>
        <p className="text-gray-600 mt-3">
          Everything you need to write, publish and promote your book.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black text-white  rounded-t-3xl p-4 text-center shadow-lg"
          >
            <div className="rounded-2xl overflow-hidden mb-6">
              <Image
                src={service.img}
                width={400}
                height={250}
                alt={service.title}
                className="object-cover w-full"
              />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              {service.desc}
            </p>

            <button className="border  px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
              Read More
            </button>
          </div>
        ))}

      </div>

      <div className="flex flex-col items-center mt-16 gap-6">

        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full background text-white">
            ←
          </button>

          <button className="w-10 h-10 rounded-full background text-white">
            →
          </button>
        </div>

        <button className="background text-white px-8 py-2 rounded-full">
          View All Services
        </button>

      </div>
    </section>
  );
}