import React from "react";
import properties from "@/helpers/properties";
import Link from "next/link";
import ContactUsSection from "@/components/CotactSection";

const PropertyDetails = ({ params }) => {
  const { slug } = params;

  // Find the property based on the slug
  const property = properties.find((prop) => prop.slug === slug);

  // If property is not found, show a message
  if (!property) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-gray-800">Property Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Property Image */}
        <div className="md:w-1/2">
          <img
            src={property.image.src}
            alt={property.propertyName}
            className="rounded-lg shadow-lg w-full object-cover h-96"
          />

          {/* Property Video (if available) */}
          {property.videoUrl && (
            <div className="mt-6 flex items-center justify-center">
            <Link
              href={property.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-center rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Watch Property Video on Facebook
            </Link>
          </div>
          )}
        </div>

        {/* Property Details */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {property.propertyName}
          </h1>
          <p className="text-gray-600 mb-4">{property.location}</p>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            {property.price}
          </p>

          {/* Property Description */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Description
            </h2>
            <p className="text-gray-700">{property.description}</p>
          </div>

          {/* Property Detailed Info */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Property Details
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {property.details.houseSize && (
                <li>
                  <strong>Size:</strong> {property.details.houseSize}
                </li>
              )}
              {property.details.bedrooms && (
                <li>
                  <strong>Bedrooms:</strong> {property.details.bedrooms}
                </li>
              )}
              {property.details.bathrooms && (
                <li>
                  <strong>Bathrooms:</strong> {property.details.bathrooms}
                </li>
              )}
              {property.details.kitchen && (
                <li>
                  <strong>Kitchen:</strong> {property.details.kitchen}
                </li>
              )}
              {property.details.garage && (
                <li>
                  <strong>Garage:</strong>{" "}
                  {property.details.garage ? "Yes" : "No"}
                </li>
              )}
              {property.details.garden && (
                <li>
                  <strong>Garden:</strong>{" "}
                  {property.details.garden ? "Yes" : "No"}
                </li>
              )}
              {property.details.plotNumber && (
                <li>
                  <strong>Plot Number:</strong> {property.details.plotNumber}
                </li>
              )}
              {property.details.zone && (
                <li>
                  <strong>Zone:</strong> {property.details.zone}
                </li>
              )}
              {property.details.furnished && (
                <li>
                  <strong>Furnished:</strong>{" "}
                  {property.details.furnished ? "Yes" : "No"}
                </li>
              )}
              {property.details.seaView && (
                <li>
                  <strong>Sea View:</strong>{" "}
                  {property.details.seaView ? "Yes" : "No"}
                </li>
              )}
              {property.details.terrace && (
                <li>
                  <strong>Terrace:</strong>{" "}
                  {property.details.terrace ? "Yes" : "No"}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <ContactUsSection/>
    </div>
  );
};

export default PropertyDetails;
