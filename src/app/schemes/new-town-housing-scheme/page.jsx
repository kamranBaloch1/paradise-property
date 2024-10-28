import React from "react";
import NewTownAbout from "@/assets/NewtownAbout.jpg";
import NewTownFeature from "@/assets/NewtownSilentFeature.jpg";
import NewTownMap from "@/assets/NewtownMap.jpg";
import Image from "next/image";

const NewTownHousingScheme = () => {
  return (
    <div className="container mx-auto py-12 px-4 space-y-16 bg-gray-50">
      {/* Main Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Side - Main img */}
        <div className="relative group">
          <Image
            src={NewTownAbout}
            alt="New Town Housing Project"
            className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>

        {/* Right Side - Main Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            New Town Housing Project Gwadar
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-8">
            Launched in 1986, the New Town Housing Project aims to cater primarily to locals, with a nominal charge for residential plots. Today, over 50% of the area is populated, featuring essential amenities such as electricity, drinking water, and telephone services. Subsequent phases have expanded the project, with some plots allotted to individuals outside Balochistan, making it an attractive investment opportunity. All records are maintained at the DCO Gwadar office for transparency.
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Welcome Text */}
        <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">New Town Gwadar Location</h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>The Heart of Gwadar</li>
            <li>Located at Jinnah Avenue & Padizar Boulevard</li>
            <li>2-minute drive from Airport Road</li>
            <li>1-minute drive from Marine Drive</li>
            <li>3-minute drive from GDA Hospital Gwadar</li>
            <li>25-minute drive from New Gwadar International Airport</li>
            <li>15-minute drive from Gwadar Port & Free Zone Phase 1</li>
            <li>8-minute drive from Nadra Office</li>
            <li>5-minute drive from District & Sessions Court Gwadar</li>
          </ul>
        </div>

        {/* Right Side - Welcome img */}
        <div className="relative group order-1 md:order-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330346.0351858565!2d62.302408!3d25.1736001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ebf1da4be23fe33%3A0x9d3a6f7343a701b2!2sNew%20Town%20Gwadar%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698376906120!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="New Town Gwadar"
          ></iframe>
        </div>
      </div>

      {/* Salient Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">
        {/* Left Side - Features List */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Salient Features</h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>Prime location in Gwadar</li>
            <li>750-meter diameter Monument</li>
            <li>Grand Jamia Masjid</li>
            <li>Central Commercial Area</li>
            <li>Marine Drive & Padizar Boulevard High-Rise Commercial</li>
            <li>
              Access from Airport Road, Pishukan Avenue, Jinnah Avenue, Marine
              Drive & Padizar Boulevard
            </li>
            <li>Facing 300 feet Padizar Boulevard</li>
          </ul>
        </div>

        {/* Right Side - Features img */}
        <div className="relative group">
          <Image
            src={NewTownFeature}
            alt="Salient Features"
            className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>
      </div>

      {/* Location Map Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Map Description */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Location Map</h2>
          <p className="text-base md:text-lg text-gray-700 leading-8">
            The New Town Housing Scheme is situated at the heart of Gwadar, strategically positioned to provide easy access to key landmarks and facilities. This area is not just a residential project but a vibrant community hub, with essential amenities and services within reach, making it an ideal place for families and investors alike.
          </p>
        </div>

        {/* Right Side - Map img */}
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group">
          <Image
            src={NewTownMap}
            alt="Map of New Town Housing Scheme"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default NewTownHousingScheme;
