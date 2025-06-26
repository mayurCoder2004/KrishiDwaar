import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hero from '../assets/hero-image (2).jpg';

const HeroSection = () => {
  return (
    <section className="bg-[#FAF5EF] pt-32 pb-20 px-6">
      {/* Welcome Text */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Welcome to KrishiDwaar
        </h2>
        <p className="text-gray-600 text-lg">
          A platform designed to empower farmers and streamline connections with retailers
          for a fair and transparent agricultural marketplace.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Empowering Farmers, Connecting Retailers
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            KrishiDwaar bridges the gap between local farmers and buyers with fair prices,
            real-time listings, and complete transparency.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link to="/auth?mode=register">
              <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
                Get Started
              </button>
            </Link>
            <Link to="/auth?mode=login">
              <button className="border border-green-600 text-green-700 px-6 py-3 rounded hover:bg-green-100 transition">
                Login
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            src={hero}
            alt="Farm illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
