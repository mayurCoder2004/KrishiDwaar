import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Ramesh Patil",
    role: "Farmer, Maharashtra",
    message:
      "KrishiDwaar helped me get better prices for my crops without going through middlemen. Very easy to use!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sujata Deshmukh",
    role: "Retailer, Pune",
    message:
      "I now buy directly from farmers. The real-time listings and secure payments make the process seamless.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Manoj Yadav",
    role: "Farmer, Uttar Pradesh",
    message:
      "The app saved me so much time and gave me full control over my produce and pricing. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#FDF9F3] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 text-lg">
          Hear from farmers and retailers who have benefited from KrishiDwaar.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-800">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{t.role}</p>
            <p className="text-gray-700 text-sm italic">“{t.message}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
