import React from 'react';
import { FaHandshake, FaBuilding, FaThumbsUp, FaMoneyBillWave } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Why Choose Paradise Property?</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-12">
          We understand that buying or selling a property is one of the most significant decisions you'll make.
          Our team is dedicated to providing a seamless and transparent experience with expert guidance every step of the way.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <FaHandshake className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Trusted Partners</h3>
            <p className="text-gray-600">
              We have a network of trusted partners who ensure every transaction is smooth and hassle-free.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <FaBuilding className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Wide Range of Listings</h3>
            <p className="text-gray-600">
              Our property portfolio covers everything from luxurious homes to commercial spaces, catering to all needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <FaThumbsUp className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Client Satisfaction</h3>
            <p className="text-gray-600">
              Our clients are our priority, and we go above and beyond to ensure complete satisfaction with every deal.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <FaMoneyBillWave className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Competitive Pricing</h3>
            <p className="text-gray-600">
              We offer the best deals and competitive pricing, ensuring you get the best value for your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
