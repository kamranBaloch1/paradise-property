import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactUsSection = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto mb-12">
          Whether you have questions about properties or need more details about our services, we&apos;re here to help.
          Reach out to us through any of the following ways, and our team will get back to you promptly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone Contact */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md text-center">
            <FaPhoneAlt className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3">Call Us</h3>
            <p className="text-gray-600">+92 3228193398 <br /> +92 3332023610</p>
          </div>

          {/* Email Contact */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md text-center">
            <FaEnvelope className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3">Email Us</h3>
            <p className="text-gray-600">paradisegwdar@gmail.com</p>
          </div>

          {/* Office Location */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md text-center">
            <FaMapMarkerAlt className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3">Visit Our Office</h3>
            <p className="text-gray-600">
              Javed Complex Main Airport Road Opposite Family Shopping Mall<br />
              Gwadar, Balochistan
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md text-center">
            <FaClock className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3">Working Hours</h3>
            <p className="text-gray-600">Open 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
