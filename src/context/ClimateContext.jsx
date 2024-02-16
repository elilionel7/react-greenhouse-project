// src/components/Greenhouse/ClimateStats.jsx
import { createContext, useContext, useState, useEffect } from 'react';

export const ClimateContext = createContext();

export function ClimateProvider({ children }) {
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);
  const [desiredTemperature, setDesiredTemperature] = useState(50);
  const [desiredHumidity, setDesiredHumidity] = useState(40);

  // Temperature adjustment logic
  useEffect(() => {
    const tempAdjustment = setTimeout(() => {
      setTemperature((currentTemperature) => {
        if (currentTemperature < desiredTemperature) return currentTemperature + 1;
        if (currentTemperature > desiredTemperature) return currentTemperature - 1;
        return currentTemperature;
      });
    }, 1000); // Adjust by 1 degree per second

    return () => clearTimeout(tempAdjustment);
  }, [temperature, desiredTemperature]);

  // Humidity adjustment logic
  useEffect(() => {
    const humidityAdjustment = setTimeout(() => {
      setHumidity((currentHumidity) => {
        if (currentHumidity < desiredHumidity) return currentHumidity + 2;
        if (currentHumidity > desiredHumidity) return currentHumidity - 2;
        return currentHumidity;
      });
    }, 500); // Adjust by 2% every half second to achieve 4% per second

    return () => clearTimeout(humidityAdjustment);
  }, [humidity, desiredHumidity]);

  return (
    <ClimateContext.Provider value={{
      temperature,
      setTemperature: setDesiredTemperature, // Update to set desired temperature
      humidity,
      setHumidity: setDesiredHumidity, // Update to set desired humidity
    }}>
      {children}
    </ClimateContext.Provider>
  );
}

// Use this hook to access the context
export const useClimate = () => useContext(ClimateContext);
