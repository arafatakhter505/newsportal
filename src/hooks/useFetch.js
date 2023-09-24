import { useEffect, useState } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/${apiPath}?${queryTerm}&apiKey=${apiKey}`;
  useEffect(() => {
    setLoading(true);
    const fetchMovie = async () => {
      const responce = await fetch(url);
      const fetchData = await responce.json();
      setLoading(false);
      setData(fetchData);
    };

    fetchMovie();
  }, [url]);
  return { data, loading };
};

export default useFetch;
