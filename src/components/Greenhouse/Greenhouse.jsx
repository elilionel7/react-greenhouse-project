// // src/components/Greenhouse/Greenhouse.jsx
// import dayImage from './images/greenhouse-day.jpg';
// import nightImage from './images/greenhouse-night.jpg';
// import './Greenhouse.css';

// import LightSwitch from './LightSwitch';
// import ClimateStats from './ClimateStats';

// function Greenhouse() {

//   return (
//     <section>
//       <img  className='greenhouse-img'
//             src={dayImage}
//             alt='greenhouse' 
//       />
//       <LightSwitch />
//       <ClimateStats />
//     </section>
//   );
// }

// export default Greenhouse;

// src/components/Greenhouse/Greenhouse.jsx
import React from 'react';
import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useTheme } from '../../context/ThemeContext'; // Make sure this path is correct based on your project structure

function Greenhouse() {
  const { themeName } = useTheme(); // Destructure to get themeName from the context

  return (
    <section>
      <img  className='greenhouse-img'
            src={themeName === 'day' ? dayImage : nightImage} // Use themeName to determine which image to display
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;

