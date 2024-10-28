import React from "react";
import Img1 from "@/assets/gieda1.png";
import Img2 from "@/assets/gieda2.png";
import Img3 from "@/assets/gieda3.png";
import MapImg from "@/assets/giedaMap.jpg";
import Image from "next/image";

const GIEDA = () => {
  return (
    <div className="container mx-auto py-12 px-6 space-y-16 bg-gray-50">
      {/* Main Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Side - Main img */}
        <div className="relative group">
          <Image
            src={Img1}
            alt="GIEDA Housing Scheme"
            className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>

        {/* Right Side - Main Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            GWADAR INDUSTRIAL ESTATE (GIEDA)
          </h2>
          <p className="text-lg text-gray-700 leading-8">
            The Government of Balochistan is developing an industrial estate in
            Gwadar to meet the demand for industrial plots in the port city,
            which is expected to have substantial potential for industrial
            investment in view of the opportunities offered by the establishment
            of deep sea port and construction of major highways linking Gwadar
            with Karachi, Quetta, Iran and Central Asian countries. There are
            also plans to extend railway to Gwadar.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
          <h2 className="text-4xl font-bold text-gray-900">
            PROPERTY IN GWADAR INDUSTRIAL ESTATE
          </h2>
          <p className="text-lg text-gray-700 leading-8">
            Property in GWADAR INDUSTRIAL ESTATE (GIEDA) is a very affordable
            housing solution for people who are looking for an ideal home. Here
            you will find property in GWADAR INDUSTRIAL ESTATE (GIEDA), apart
            from a plot of land, all you will need is to spend your hard-earned
            money on construction materials, and the rest can be taken care of
            by the experts who are ready to deal you with their expertise.
            Property in Gwadar industrial estate is an investment opportunity
            with a very high yield. It is a business that is going through a
            good period, which means it makes sense to invest in it. The city of
            Gwadar has a lot of potentials, and it is going to change the face
            of Pakistan. If you are looking for a property in Gwadar Industrial
            Estate, then you have come to the right place. We have an extensive
            range of plots available at the most competitive prices. All our
            properties are well-connected with all the other parts of Pakistan
            via roadways and railways. The city has been growing rapidly and is
            now a key location for business as well as living purposes.
          </p>
        </div>

        {/* Right Side img */}
        <div className="relative group order-1 md:order-2">
          <Image
            src={Img2}
            alt="Welcome to GIEDA"
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
            <li>3000 Acers Area</li>
            <li>1, 2, 5 Acers Industiral Plots</li>
            <li>Desalination Plant</li>
            <li>4 MV Grid Station</li>
            <li>250, 200, 80 feet Wide Road Network</li>
            <li>250,000 GLS RCC Water Tank</li>
            <li>Special Economic Zone</li>
            <li>Various Tax exemption</li>
          </ul>
        </div>

        {/* Right Side  img */}
        <div className="relative group">
          <Image
            src={Img3}
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
            Discover the Gwadar Industrial Estate's strategic location, offering
            seamless connectivity to key regional and national hubs. Positioned
            in a rapidly developing area, it’s ideal for businesses and
            investors looking for growth opportunities. Below, you can explore a
            visual representation of the area's layout and landmarks.
          </p>
        </div>

        {/* Right Side - Map img */}
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group">
          <Image
            src={MapImg}
            alt="Map of GIEDA Housing Scheme"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={1024}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default GIEDA;
