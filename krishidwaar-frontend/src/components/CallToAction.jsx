import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-green-700 py-16 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to be a part of the agricultural revolution?
        </h2>
        <p className="text-lg mb-8">
          Join KrishiDwaar today and experience direct connections, better pricing, and a transparent marketplace — whether you're a farmer or a retailer.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/auth?mode=register">
            <button className="bg-white text-green-700 px-6 py-3 rounded hover:bg-gray-200 transition">
              Get Started
            </button>
          </Link>
          <Link to="/auth?mode=login">
            <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-green-700 transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
