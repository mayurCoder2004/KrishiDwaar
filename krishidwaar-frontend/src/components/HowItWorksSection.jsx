import React, { useEffect } from "react";
import { FaUserPlus, FaSearch, FaExchangeAlt, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorksSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      icon: <FaUserPlus className="text-white text-3xl" />,
      title: "1. Sign Up",
      description: "Farmers and buyers register and create their profiles.",
      bg: "bg-green-600",
    },
    {
      icon: <FaSearch className="text-white text-3xl" />,
      title: "2. Browse Listings",
      description: "Buyers explore fresh produce listed by verified farmers.",
      bg: "bg-emerald-500",
    },
    {
      icon: <FaExchangeAlt className="text-white text-3xl" />,
      title: "3. Connect & Negotiate",
      description: "Users can communicate and finalize deals directly.",
      bg: "bg-yellow-500",
    },
    {
      icon: <FaCheckCircle className="text-white text-3xl" />,
      title: "4. Confirm & Deliver",
      description: "Complete transactions and get produce delivered securely.",
      bg: "bg-sky-500",
    },
  ];

  return (
    <section className="bg-[#F4FDFB] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          How KrishiDwaar Works
        </h2>
        <p className="text-gray-600 text-lg">
          A simple and efficient process to connect farmers with retailers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${step.bg}`}>
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
