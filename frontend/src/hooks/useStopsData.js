// frontend/src/hooks/useStopsData.js
import { useState, useEffect } from 'react';

export default function useStopsData() {
  const [stopsData, setStopsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStops() {
      try {
        const response = await fetch('http://localhost:3001/api/stops');
        if (!response.ok) {
          throw new Error('Failed to fetch stops');
        }
        const data = await response.json();
        setStopsData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchStops();
  }, []);

  return { stopsData, loading, error };
}