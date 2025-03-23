// frontend/src/components/TransitLayer.js
import React from 'react';
import { Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';

// Define a custom icon for stops (or use different icons per type if desired)
const defaultStopIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// Style for route lines (blue, similar to Apple Maps metro lines)
const routeStyle = {
  color: 'blue',
  weight: 4,
  opacity: 0.7
};

const TransitLayer = ({ routesData, stopsData, selectedTypes }) => {
  return (
    <>
      {/* Render Routes as Polylines */}
      {routesData && routesData.routes && routesData.routes.map((route) => {
        // Assume route.shape is an array of [latitude, longitude] pairs.
        // If no shape data is provided, you may need to fetch it separately.
        return (
          <Polyline
            key={route.route_id}
            positions={route.shape || []}
            pathOptions={routeStyle}
          />
        );
      })}
      
      {/* Render Stops as Clickable Markers */}
      {stopsData && stopsData.stops && stopsData.stops.map((stop) => (
        <Marker 
          key={stop.stop_id} 
          position={[stop.latitude, stop.longitude]} 
          icon={defaultStopIcon}
        >
          <Popup>
            <div>
              <strong>{stop.stop_name}</strong>
              <br />
              ID: {stop.stop_id}
              <br />
              {/* In the future, attach an event handler to fetch and display departure times */}
              <button onClick={() => alert('Load departure times here!')}>
                Show Departures
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default TransitLayer;
