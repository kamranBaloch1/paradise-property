import React from "react";
import SangarWelcome from '@/assets/SangarWelcome.png';
import SangarAbout from '@/assets/SangarAbout.png';
import SangarFeature from '@/assets/SangarFeature.jpg';
import SangarMap from '@/assets/SangarMap.jpg';
import Image from "next/image";


const SangarHousingScheme = () => {
  return (
    <div className="container mx-auto py-12 px-6 space-y-16 bg-gray-50">
      {/* Main Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Side - Main img */}
        <div className="relative group">
          <Image
            src={SangarAbout}
            alt="Sangar Housing Scheme"
            className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>

        {/* Right Side - Main Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Sangar Housing Scheme Gwadar
          </h2>
          <p className="text-lg text-gray-700 leading-8">
            Sangar housing project Gwadar is situated at the most famous and
            beautiful hill station of Gwadar named Koh-e-Batil. The project is
            also known as Singhar Gwadar/Sanghar Gwadar because of the different
            pronunciations in the local languages of Balochistan. Moreover, The
            project owner is the government of Balochistan. Sangar housing
            project is consists of residential, commercial, hotel, and resorts
            including PC Gwadar (Pearl Continental). Sangar housing project has
            some amazing tourist spots like the golden sand beach and grey sand
            beach, a sunset point, A beautiful sunset park, and a fishing point
            where tourists from all over Pakistan visit and spend vacations. The
            engineering design of the project was prepared after a full
            investigation and soil testing of sangar creek. As a result,
            Engineers found Koh-e-Batil Gwadar’s bearing capacity very strong to
            develop this project. Sangar Housing scheme Gwadar is suitable for
            high-rise buildings and commercial projects according to Gwadar
            smart port city master plan 2020. The sale and purchase of this
            scheme are one of the best options for investors in Pakistan and
            overseas Pakistani’s. Thus, The plots of this scheme are considered
            as cash in hand and could be sold anytime with a good return.
            project launched on Koh e Batail (maximum height of 500 ft) provides
            attractive residential and commercial opportunities to the ambitious
            aspirant of Pakistan.
          </p>
         
        </div>
      </div>

      {/* Welcome Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Welcome Text */}
        <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
          <h2 className="text-4xl font-bold text-gray-900">
            Welcome to Sangar Housing Project
          </h2>
          <p className="text-lg text-gray-700 leading-8">
            Sangar Housing Project provides sustained development for a healthy
            and vibrant place with a strong infrastructure base supporting
            diversified housing opportunities and a wide range of tourism as
            well recreation facilities for all. Sangar Housing Project builds a
            state of art housing and tourism facility supporting the development
            of the city of Gwadar.
          </p>
        </div>

        {/* Right Side - Welcome img */}
        <div className="relative group order-1 md:order-2">
          <Image
            src={SangarWelcome}
            alt="Welcome to Sangar"
            className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
            <li>PC Hotel - Located at Koh-e-Batail, Gwadar</li>
            <li>Prime location in the Subcontinent</li>
            <li>Spread over 2,500 Acres</li>
            <li>Supporting upcoming deep seaport</li>
            <li>Community Parks & Playgrounds</li>
            <li>Shopping Centers & Schools</li>
            <li>Recreational Areas & more</li>
          </ul>
        </div>

        {/* Right Side - Features img */}
        <div className="relative group">
          <Image
            src={SangarFeature}
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
            The Sangar Housing Scheme is strategically located on Koh-e-Batil, a
            prime location in Gwadar. Explore the proximity to key landmarks
            using the visual map provided below.
          </p>
        </div>

        {/* Right Side - Map img */}
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group">
          <Image
            src={SangarMap}
            alt="Map of Sangar Housing Scheme"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default SangarHousingScheme;
