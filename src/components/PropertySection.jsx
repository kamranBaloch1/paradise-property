import React from 'react';
import PropertyCard from './PropertyCard';
import properties from '@/helpers/properties';

const PropertySection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Explore Our Featured Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
