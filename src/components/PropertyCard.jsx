import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    
      <img
        src={property.image.src}
        alt={property.propertyName}
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{property.propertyName}</h3>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <p className="text-lg font-semibold text-gray-800 mb-4">{property.price}</p>
        <Link href={`/property/${property.slug}`}>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
