//src/components/Thermometer/Thermometer.jsx
import ReactSlider from 'react-slider';
import './Thermometer.css';

import { useClimate } from '../../context/ClimateContext';  


function Thermometer() {
  const { temperature, setTemperature } = useClimate(); // Use the context

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature} // Use temperature from context
        onAfterChange={(val) => setTemperature(val)} // Update temperature in context
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
