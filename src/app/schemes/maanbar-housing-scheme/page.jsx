import React from "react";
import MaanbarFeature from "@/assets/MaanbarFeature.jpg";
import MaanbarProperty from "@/assets/MaanbarProperty.png";
import MaanbarMap from "@/assets/MaanbarMap.jpg";
import Image from "next/image";

const MaanbarHousingScheme = () => {
  return (
    <div className="container mx-auto py-12 px-6 space-y-16 bg-gray-50">
      {/* Main Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Side - Main img */}
        <div className="relative group shadow-lg rounded-lg overflow-hidden">
          <Image
            src={MaanbarProperty}
            alt="Maanbar Housing Scheme"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>

        {/* Right Side - Main Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
            Maanbar Housing Scheme Gwadar
          </h2>
          <p className="text-lg text-gray-700 leading-8">
            Maanbar housing scheme Gwadar is a government project located on
            marine drive and one of the seafronts of Pishukan, district Gwadar.
            In Gwadar, some government projects are better options to invest in
            Gwadar real estate. However, there are several projects including
            residential, commercial, agricultural and industrial projects in
            Gwadar smart port city master plan 2020. Moreover, Maanbar housing
            scheme is one of the prime located schemes on the seaside in Gwadar
            port city. The area contains beautiful beach sites, fisheries setup,
            and stunning hill series. A fisheries JT is about to complete very
            soon which will empower the fishermen and local fish business in
            Gwadar and Makran division. The Maanbar housing project Gwadar will
            provide many business residences and commercial project
            opportunities for the people of Pishukan and especially for
            investors looking to invest in Gwadar. The scheme contains various
            facilities including mosques, community centers, healthcare centers,
            schools, parks, and beach-sighted commercials.
          </p>
        </div>
      </div>

      {/* Property Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Welcome Text */}
        <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
          <h2 className="text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
            Property in Maanbar Housing Scheme Gwadar
          </h2>
          <p className="text-lg text-gray-700 leading-8">
            Are you looking for property in the Maanbar housing scheme in
            Gwadar? Then you are at the right place as Property in Maanbar
            housing scheme Gwadar is one of the leading real estate consultants
            in Pakistan. This area is the best place for you to live due to its
            ideal location and facilities provided by the government. It offers
            excellent accommodation if you are searching for any kind of
            residential property in Gwadar. The Maanbar housing scheme Gwadar is
            one of the best housing schemes in Pakistan, constructed by the
            Government of Balochistan, located near Sohrab Goth Airport, Gwadar
            International Seaport, and the Gwadar city center.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Safe investment in Maanbar housing scheme Gwadar
          </h2>
          <p className="text-lg text-gray-700 leading-8">
            Maanbar housing scheme Gwadar is a good investment that can turn
            into a cash cow in the long-run. The main reason behind investing in
            Maanbar housing scheme Gwadar is that you get to earn rental income
            and sell off the rent money without much effort. We are going to
            discuss some important aspects of Maanbar housing scheme Gwadar so
            that you can have a better understanding about this investment and
            make an informed decision about your future.
          </p>
        </div>

        {/* Right Side - Property img */}
        <div className="relative group order-1 md:order-2 shadow-lg rounded-lg overflow-hidden">
          <Image
            src={MaanbarProperty}
            alt="Property of Maanbar"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>
      </div>

      {/* Salient Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">
        {/* Left Side - Features List */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Salient Features</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Located in front of the sea at Pishukan</li>
            <li>Low-cost housing scheme</li>
            <li>Front on Gunz Road</li>
            <li>Gated Community</li>
          </ul>
        </div>

        {/* Right Side - Features img */}
        <div className="relative group">
          <Image
            src={MaanbarFeature}
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
          <h2 className="text-4xl font-bold text-gray-900">Location Map</h2>
          <p className="text-lg text-gray-700 leading-8">
            The Maanbar Housing Scheme is strategically located on Koh-e-Batil,
            a prime location in Gwadar. Explore the proximity to key landmarks
            using the visual map provided below.
          </p>
        </div>

        {/* Right Side - Map img */}
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group">
          <Image
            src={MaanbarMap}
            alt="Map of Maanbar Housing Scheme"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default MaanbarHousingScheme;
