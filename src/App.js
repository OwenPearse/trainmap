/* src/App.js */
import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Define the bounds for Melbourne
  const worldBounds = [
    [-90, -180], // Southwest corner (South Pole)
    [90, 180],    // Northeast corner (North Pole)
  ];

  return (
    <div className="App">
      {/* Hamburger Menu */}
      <div className="hamburger-menu">
        <button className="hamburger-button" onClick={toggleMenu}>
          &#9776;
        </button>
        {menuOpen && (
          <div className="menu-content">
            <a href="#home">Home</a>
            <a href="#trains">Trains</a>
            <a href="#trams">Trams</a>
            <a href="#buses">Buses</a>
            <a href="#settings">Settings</a>
          </div>
        )}
      </div>


      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        className="map-container"
        minZoom={2}
        maxZoom={18}
        maxBounds={worldBounds}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Transit Lines and Other Layers */}
      </MapContainer>
    </div>
  );
}

export default App;
