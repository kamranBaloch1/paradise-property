import React from "react";
import NewTownAbout from "@/assets/NewTownAbout.jpg";
import NewTownSilentFeature from "@/assets/NewTownSilentFeature.jpg";
import NewTownMap from "@/assets/NewTownMap.jpg";
import Image from "next/image";

const NewTownHousingScheme = () => {
  return (
    <div className="container mx-auto py-12 px-4 space-y-16 bg-gray-50">
      {/* Main Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="relative group">
          <Image
            src={NewTownAbout}
            alt="New Town Housing Project"
            className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>
        {/* Additional content remains the same */}
      </div>

      {/* Salient Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Salient Features</h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>Prime location in Gwadar</li>
            {/* Additional list items */}
          </ul>
        </div>

        <div className="relative group">
          <Image
            src={NewTownSilentFeature}
            alt="Salient Features"
            className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>
      </div>

      {/* Location Map Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Location Map</h2>
          {/* Map description */}
        </div>

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
