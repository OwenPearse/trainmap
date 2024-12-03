import React from 'react';
import { GeoJSON } from 'react-leaflet';

const TransitLayer = ({ routesData, selectedTypes }) => {
  const getStyle = (feature) => {
    switch (feature.properties.route_type) {
      case 'Train':
        return { color: 'blue' };
      case 'Tram':
        return { color: 'orange' };
      case 'Bus':
        return { color: 'green' };
      default:
        return { color: 'black' };
    }
  };

  const filteredData = routesData.filter(route =>
    selectedTypes.includes(route.properties.route_type)
  );

  return (
    <>
      {filteredData.map(route => (
        <GeoJSON key={route.properties.route_id} data={route} style={getStyle} />
      ))}
    </>
  );
};

export default TransitLayer;
