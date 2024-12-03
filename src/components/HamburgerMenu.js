import React from 'react';
import ToggleSwitch from './PTTypeToggleSwitch';
import './HamburgerMenu.css'; // Create a separate CSS file for Menu styles

const Menu = ({ menuOpen, toggleMenu, transportTypes, toggleTransportType }) => {
  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={toggleMenu}>
        &#9776;
      </button>
      {menuOpen && (
        <div className="menu-content">
          <a href="#home">Home</a>
          <ToggleSwitch
            label="Trains"
            isChecked={transportTypes.Train}
            onToggle={() => toggleTransportType('Train')}
          />
          <ToggleSwitch
            label="Trams"
            isChecked={transportTypes.Tram}
            onToggle={() => toggleTransportType('Tram')}
          />
          <ToggleSwitch
            label="Buses"
            isChecked={transportTypes.Bus}
            onToggle={() => toggleTransportType('Bus')}
          />
          <a href="#settings">Settings</a>
        </div>
      )}
    </div>
  );
};

export default Menu;
