import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import Menu from './components/HamburgerMenu';
import transitRoutes from './data/routes/melbTransitRoutes.json'; // Import sample transit routes data
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [transportTypes, setTransportTypes] = useState({
    Train: true,
    Tram: true,
    Bus: true
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTransportType = (type) => {
    setTransportTypes(prevState => ({
      ...prevState,
      [type]: !prevState[type]
    }));
  };

  // Extract selected transport types
  const selectedTypes = Object.keys(transportTypes).filter(type => transportTypes[type]);

  return (
    <div className="App">
      <Menu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        transportTypes={transportTypes}
        toggleTransportType={toggleTransportType}
      />
      <MapComponent routesData={transitRoutes} selectedTypes={selectedTypes} />
    </div>
  );
}

export default App;
