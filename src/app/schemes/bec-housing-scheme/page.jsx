import React from "react";
import bec1 from "@/assets/bec1.png";
import becMap from "@/assets/becMap.jpg";
import img2 from "@/assets/MaanbarFeature.jpg";
import Image from "next/image";

const BECHS = () => {
  return (
    <div className="container mx-auto py-12 px-4 space-y-16 bg-gray-50">
      {/* Main Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Side - Main img */}
        <div className="relative group">
          <Image
            src={bec1}
            alt="BECHS Housing Project"
            className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>

        {/* Right Side - Main Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900"></h2>
          <p className="text-base md:text-lg text-gray-700 leading-8">
            BECHS Gwadar (Balochistan Employees Cooperative Housing Scheme) is
            located at Janubi Ankara after Golden Palm Housing Scheme Gwadar. It
            is District Govt. project like New Town and Sangar Housing Scheme
            Gwadar. The project transfer is handle by CG Group. It is small
            scheme and consist of 367 residential plots & 146 commercial plots.
            Baluchistan employs corporate housing society in a residential
            building that is located at surregional road, graban. This company
            has apartments for sale starting from 2500 square feet to 50000
            square feet. These apartments are luxurious and well-planned to meet
            the needs of families as well as tenants. They can be sold as
            individual units or in town houses. The prices mentioned for these
            apartments are inclusive of electricity, water, and sewerage
            charges. Baluchistan employese corporate housing society is a
            leading housing society in Pakistan. Its members are given
            flexibility and freedom in managing their own affairs and contribute
            to the growth of the organization through their individual needs.
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Welcome Text */}
        <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            BECHS Location
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>1 minute drive from Marine Drive</li>
            <li>10 minute drive from New Town Monument Gwadar</li>
            <li>20 minute drive from Gwadar Port & Free Zone Phase 1</li>
            <li>20 minute drive from Sangar Housing Project Gwadar</li>
            <li>35 minute drive from New Gwadar International Airport</li>
            <li>15 minute drive from GDA Hospital Gwadar</li>
          </ul>
        </div>

        {/* Right Side - Welcome img */}
        <div className="relative group order-1 md:order-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128162.68094500826!2d62.045929!3d25.179002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ebf1d5e2d2b5e85%3A0xd88a374285e37d3d!2sBalochistan%20Employees%20Cooperative%20Housing%20Scheme%20Gwadar!5e0!3m2!1sen!2s!4v1698528309000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="BECHS Gwadar"
          ></iframe>
        </div>
      </div>

      {/* Salient Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">
        {/* Left Side - Features List */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Salient Features
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>Located at Marine Drive</li>
            <li>Located near Gwadar Sports Complex</li>
            <li>Located near Down Town Gwadar</li>
            <li>4 Master plan roads passing throgh this small scheme</li>
            <li>Hihg Rise Commercial Plots</li>
            <li>Neighbourhood market</li>
          </ul>
        </div>

        {/* Right Side - Features img */}
        <div className="relative group">
          <Image
            src={img2}
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Location Map
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-8">
            The Balochistan Employees Cooperative Housing Scheme (BECHS) in
            Gwadar is a thoughtfully planned residential and commercial project,
            designed to cater to the needs of modern living. Located
            strategically, BECHS provides convenient access to key locations
            within Gwadar, making it an attractive choice for both residents and
            investors. This housing scheme is not just about providing plots; it
            is about creating a well-integrated community that offers essential
            amenities, secure surroundings, and a peaceful environment. With
            well-laid roads, nearby markets, and future development potential,
            BECHS stands as a promising project in the rapidly evolving city of
            Gwadar.
          </p>
        </div>

        {/* Right Side - Map img */}
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group">
          <Image
            src={becMap}
            alt="Map of BECHS Housing Scheme"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default BECHS;
