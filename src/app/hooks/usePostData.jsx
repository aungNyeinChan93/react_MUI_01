import { useState } from "react";
import { useNavigate } from "react-router";

export const usePostData = (to = null) => {
  const [data, setData] = useState(null);
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const navigate = useNavigate();

  const createData = async (url, payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
      setSuccess(true);
      navigate(to);
    }
  };

  return { createData, data, isError, isLoading, isSuccess };
};
