import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (URL, options) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(URL, options);
      const responseData = await response.json();

      if (!response.ok) {
        // Use the error message from the API if available
        throw new Error(responseData.message || response.statusText);
      }

      setData(responseData);
      console.log("INSIDE THE USE FETCH", responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, request };
};

export default useFetch;