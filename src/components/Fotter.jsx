import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Paradise Property</h3>
            <p className="text-white">
              At Paradise Property, we specialize in providing the best real
              estate services. Whether you&apos;re buying, selling, or renting, we
              are here to guide you every step of the way.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties-list"
                  className="hover:text-white transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3" />
                Main Airport Rd, Gwadar Old City, Gwadar, Balochistan
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3" />
                0322 8193398
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                paradisegwdar@gmail.com
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/ParadiseGwadar/"
                className="p-3 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://instagram.com/gwadar_paradise/"
                className="p-3 rounded-full bg-gray-700 hover:bg-pink-500 transition-colors"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com/in/gwadar-paradise/?originalSubdomain=pk"
                className="p-3 rounded-full bg-gray-700 hover:bg-blue-700 transition-colors"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Paradise Property. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
