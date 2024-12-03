import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import TransitLayer from './TransitLayer';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ routesData, selectedTypes }) => {
  const melbourneCBD = {
    lat: -37.8136, // Latitude for Melbourne CBD
    lng: 144.9631  // Longitude for Melbourne CBD
  };

  return (
    <MapContainer
      center={[melbourneCBD.lat, melbourneCBD.lng]}
      zoom={14}
      scrollWheelZoom={true}
      className="map-container"
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TransitLayer routesData={routesData} selectedTypes={selectedTypes} />
    </MapContainer>
  );
};

export default MapComponent;
