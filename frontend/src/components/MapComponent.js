// frontend/src/components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import TransitLayer from './TransitLayer';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ routesData, stopsData, selectedTypes }) => {
  const melbourneCBD = { lat: -37.8136, lng: 144.9631 };

  return (
    <MapContainer
      center={[melbourneCBD.lat, melbourneCBD.lng]}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TransitLayer 
        routesData={routesData} 
        stopsData={stopsData} 
        selectedTypes={selectedTypes} 
      />
    </MapContainer>
  );
};

export default MapComponent;
