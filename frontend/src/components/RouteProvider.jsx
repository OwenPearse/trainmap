// frontend/src/components/RoutesProvider.jsx
import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';

function RoutesProvider() {
  const [routesData, setRoutesData] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([0]); // default: trains

  useEffect(() => {
    // Example: fetch routes for the first selected type
    // or fetch them all if you want
    const fetchRoutes = async () => {
      if (selectedTypes.length === 0) return;
      const routeType = selectedTypes[0]; // just an example
      try {
        const response = await fetch(`/api/routes/${routeType}`);
        const data = await response.json();
        setRoutesData(data);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };
    fetchRoutes();
  }, [selectedTypes]);

  return (
    <div>
      {/* You might have a UI to toggle route types */}
      <MapComponent routesData={routesData} selectedTypes={selectedTypes} />
    </div>
  );
}

export default RoutesProvider;
