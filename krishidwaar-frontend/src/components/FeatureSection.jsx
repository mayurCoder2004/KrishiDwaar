import React, { useEffect } from "react";
import { FaHandshake, FaBalanceScale, FaClock, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#F4FDFB] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
          Why Choose KrishiDwaar?
        </h2>
        <p className="text-gray-600 text-lg">
          Transparent, fair, and direct connections between the growers and the retailers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div
          className="bg-white border-t-4 border-emerald-500 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
          data-aos="fade-up"
        >
          <FaHandshake className="text-emerald-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-emerald-800 mb-2">Direct Connections</h3>
          <p className="text-gray-600 text-sm">
            Farmers and retailers connect directly, eliminating unnecessary middlemen.
          </p>
        </div>

        {/* Feature 2 */}
        <div
          className="bg-white border-t-4 border-yellow-400 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaBalanceScale className="text-yellow-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-yellow-700 mb-2">Fair Pricing</h3>
          <p className="text-gray-600 text-sm">
            Transparent pricing ensures everyone gets the value they deserve.
          </p>
        </div>

        {/* Feature 3 */}
        <div
          className="bg-white border-t-4 border-sky-400 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaClock className="text-sky-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-sky-700 mb-2">Live Listings</h3>
          <p className="text-gray-600 text-sm">
            Real-time updates of available produce and ongoing orders.
          </p>
        </div>

        {/* Feature 4 */}
        <div
          className="bg-white border-t-4 border-rose-400 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaShieldAlt className="text-rose-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-rose-700 mb-2">Secure Transactions</h3>
          <p className="text-gray-600 text-sm">
            Built-in secure authentication and data encryption for safe exchanges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
