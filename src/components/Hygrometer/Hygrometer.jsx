// import ReactSlider from 'react-slider';
// import './Hygrometer.css';

// function Hygrometer() {
//   return (
//     <section>
//       <h2>Hygrometer</h2>
//       <div className="actual-humid">Actual Humidity: {"y"}%</div>
//       <ReactSlider
//         value={10}
//         onAfterChange={(val) => {}}
//         className="hygrometer-slider"
//         thumbClassName="hygrometer-thumb"
//         trackClassName="hygrometer-track"
//         ariaLabel={"Hygrometer"}
//         orientation="vertical"
//         min={0}
//         max={100}
//         renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
//         invert
//         pearling
//         minDistance={1}
//       />
//     </section>
//   );
// }

// export default Hygrometer;


import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimate } from '../../context/ClimateContext'; // Ensure correct path

function Hygrometer() {
  const { humidity, setHumidity } = useClimate(); // Accessing humidity from ClimateContext

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div> {/* Display current humidity */}
      <ReactSlider
        value={humidity} // Use current humidity for the slider value
        onAfterChange={(val) => setHumidity(val)} // Update humidity in context on change
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical" // or "horizontal" based on your design preference
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert={true}
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
