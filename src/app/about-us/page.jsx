import React from "react";
import { FaHome, FaEnvelope, FaPhoneAlt, FaUsers } from "react-icons/fa";
import logo from "@/assets/logo.png";
import jameel from "@/assets/jameel.jpg";
import shakeel from "@/assets/shakeel.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-yellow-700 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto rounded-lg p-4 sm:p-10 space-y-6 sm:space-y-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-white mb-4">
          About Paradise Property
        </h1>

        {/* Flex Container for About Section */}
        <div className="flex flex-col lg:flex-row items-center bg-white p-6 sm:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
          {/* Text Section */}
          <div className="lg:w-1/2 p-4 sm:p-6">
            <p className="text-gray-700 mb-4">
              Welcome to Paradise Property, your premier real estate agency
              nestled in the vibrant heart of Gwadar. With over 11 years of
              experience in the real estate market, we have cultivated a
              reputation for excellence, integrity, and unparalleled service.
              Our commitment to our clients is not just about transactions; it’s
              about building lasting relationships and fostering trust within
              the community. At Paradise Property, we understand that the
              journey to finding your dream property can be both exciting and
              challenging. Whether you are looking to buy, sell, or invest, our
              dedicated team of real estate professionals is here to guide you
              every step of the way.
            </p>
            <p className="text-gray-700 mb-4">
              We take the time to listen to your needs and preferences, ensuring
              that we provide tailored solutions that align with your goals. Our
              extensive knowledge of the local market, combined with our keen
              understanding of current trends and property values, allows us to
              offer you the most accurate and up-to-date information.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 p-4 sm:p-6 flex justify-center">
            <img
              src={logo.src}
              alt="Gwadar Property"
              className="w-3/4 sm:w-full h-auto rounded-lg border-4 shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-500 mb-4">
            <FaHome className="inline mr-2" /> Our Mission
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            At Paradise Property, our mission is to deliver exceptional real
            estate services tailored to your unique needs. We believe in
            building lasting relationships with our clients based on trust,
            transparency, and results.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-500 mb-4">
            <FaUsers className="inline mr-2" /> Meet Our Team
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {/* Team Member 1 */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 flex justify-center mb-4 sm:mb-0">
                <img
                  src={shakeel.src}
                  alt="Shakeel Ahmed"
                  className="w-3/4 sm:w-full h-auto rounded-lg border-4 shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="sm:w-1/2 flex flex-col justify-center px-4">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">Shakeel Ahmed</h3>
                <p className="text-gray-600 mb-2">
                  Senior Real Estate Consultant & Owner of Paradise Property
                </p>
                <p className="text-gray-700">
                  With over a decade of experience in the real estate industry,
                  we have cultivated a deep understanding of the market and the
                  needs of our clients. Our primary mission is to create a
                  secure and reliable platform where buyers and sellers can
                  engage in seamless transactions, ensuring that every deal is
                  not only straightforward but also affordable.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 flex justify-center mb-4 sm:mb-0">
                <img
                  src={jameel.src}
                  alt="Jameel Ahmed"
                  className="w-3/4 sm:w-full h-auto rounded-lg border-4 shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="sm:w-1/2 flex flex-col justify-center px-4">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">Jameel Ahmed</h3>
                <p className="text-gray-600 mb-2">
                  Senior Real Estate Consultant & Owner of Paradise Property
                </p>
                <p className="text-gray-700">
                  With over a decade of experience in the real estate industry,
                  we have cultivated a deep understanding of the market and the
                  needs of our clients. Our primary mission is to create a
                  secure and reliable platform where buyers and sellers can
                  engage in seamless transactions, ensuring that every deal is
                  not only straightforward but also affordable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-500 mb-4">
            <FaEnvelope className="inline mr-2" /> Contact Us
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Ready to start your real estate journey with us? Contact our team
            today to discuss your needs or to schedule a consultation.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-2">
            <FaPhoneAlt className="inline mr-2" /> Phone: +92 3228193398 & +92 3332023610
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-2">
            <FaEnvelope className="inline mr-2" /> Email: (paradisegwdar@gmail.com)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
