import { useEffect, useState } from "react";

export const useGetData = (endPonit) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState();

  const fetchData = async (endPonit) => {
    try {
      setLoading(true);
      const response = await fetch(endPonit);
      if (!response.ok) {
        throw new Error("data fetching error!");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(endPonit);
  }, [endPonit]);

  return { data, isError, isLoading };
};
