import { useState } from "react";
import { useNavigate } from "react-router";

export const useDeleteData = (to = null) => {
  const [data, setData] = useState();
  const [isError, setError] = useState();
  const navigate = useNavigate();

  const destroyData = async (url, id) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "Delete",
      });
      if (!res.ok) {
        throw new Error(`Delete note Error!`);
      }
      const result = await res.json();
      setData(result);
      a;
    } catch (error) {
      setError(error.message);
    } finally {
      to && navigate(to);
    }
  };
  return { data, isError, destroyData };
};
