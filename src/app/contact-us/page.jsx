import ContactUsSection from "@/components/CotactSection";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <ContactUsSection />
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-12 space-y-14">
          {/* Header Section */}
          <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            Have questions? Need assistance? We're here to help. Reach out to us
            for any inquiries, feedback, or details regarding our services.
          </p>

          {/* Contact Form */}
          <div className="bg-gradient-to-r from-white to-gray-100 p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">
              Connect With Us
            </h2>
            <form className="space-y-8">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-800"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-3 w-full px-5 py-3 border-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-800"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-3 w-full px-5 py-3 border-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-800"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Type your message here..."
                  className="mt-3 w-full px-5 py-3 border-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Location Map */}
          <div className="bg-gradient-to-r from-white to-gray-100 p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">
              <FaMapMarkerAlt className="inline mr-3" /> Visit Our Office
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our office is open for visitors. You can locate us at:
            </p>
            <p className="text-lg font-medium text-gray-800 mb-10">
              📍 Javed Complex Main Airport Road Opposite Family shopping Mall Gwadar Balochistan
            </p>

            {/* Google Map Embed */}
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
              <iframe
                title="Our Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15601.583401798804!2d62.3275161!3d25.1459875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4142991b4c49ad8b%3A0x4142991b4c49ad8b!2sGwadar%20Paradise%20Property!5e0!3m2!1sen!2s!4v1698409320187!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
