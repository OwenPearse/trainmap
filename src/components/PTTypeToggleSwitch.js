import React from 'react';

const PTTypeToggleSwitch = ({ label, isChecked, onToggle }) => {
  return (
    <div className="toggle-switch">
      <label>
        <input type="checkbox" checked={isChecked} onChange={onToggle} />
        <span className="slider"></span>
        {label}
      </label>
    </div>
  );
};

export default PTTypeToggleSwitch;