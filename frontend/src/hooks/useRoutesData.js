// frontend/src/hooks/useRoutesData.js
import { useState, useEffect } from 'react';

export default function useRoutesData() {
  const [routesData, setRoutesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRoutes() {
      try {
        const response = await fetch('/api/routes'); // or your routes endpoint
        if (!response.ok) throw new Error('Failed to fetch routes');
        const data = await response.json();
        setRoutesData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchRoutes();
  }, []);

  return { routesData, loading, error };
}
