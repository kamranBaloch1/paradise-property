import React from 'react';

import properties from '@/helpers/properties';
import PropertyCard from '@/components/PropertyCard';

const PropertyList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
