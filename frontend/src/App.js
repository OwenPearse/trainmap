// frontend/src/App.js
import React from 'react';
import MapComponent from './components/MapComponent';
import useRoutesData from './hooks/useRoutesData';
import useStopsData from './hooks/useStopsData';

function App() {
  const { routesData, loading: routesLoading, error: routesError } = useRoutesData();
  const { stopsData, loading: stopsLoading, error: stopsError } = useStopsData();
  const selectedTypes = [0, 1, 2]; // adjust as needed

  if (routesLoading || stopsLoading) return <div>Loading...</div>;
  if (routesError) return <div>Error loading routes: {routesError.message}</div>;
  if (stopsError) return <div>Error loading stops: {stopsError.message}</div>;

  return (
    <MapComponent 
      routesData={routesData} 
      stopsData={stopsData} 
      selectedTypes={selectedTypes} 
    />
  );
}

export default App;
