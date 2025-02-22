// frontend/src/components/TransitLayer.js
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// A default Leaflet icon (if you want custom icons, define them here)
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const TransitLayer = ({ routesData, selectedTypes }) => {
  if (!routesData || !routesData.routes) {
    return null;
  }

  return (
    <>
      {routesData.routes.map((route) => {
        const lat = -37.8136; 
        const lng = 144.9631; 
        return (
          <Marker 
            key={route.route_id} 
            position={[lat, lng]} 
            icon={defaultIcon}
          >
            <Popup>
              <div>
                <strong>{route.route_name}</strong><br />
                ID: {route.route_id}<br />
                Type: {route.route_type}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

export default TransitLayer;
