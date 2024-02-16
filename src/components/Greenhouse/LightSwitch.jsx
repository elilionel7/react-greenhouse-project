 import './LightSwitch.css';


// src/components/Greenhouse/LightSwitch.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Make sure this path is correct based on your project structure

function LightSwitch() {
  const { themeName, setThemeName } = useTheme(); // Destructure to get themeName and setThemeName from the context

  return (
    <div className={`light-switch ${themeName}`}> {/* Dynamically apply the themeName class */}
      <div className="on" onClick={() => setThemeName('day')}>DAY</div> {/* Set theme to day */}
      <div className="off" onClick={() => setThemeName('night')}>NIGHT</div> {/* Set theme to night */}
    </div>
  );
}

export default LightSwitch;
