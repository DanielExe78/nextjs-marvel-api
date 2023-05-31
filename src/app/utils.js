import { useEffect, useState } from "react";

export const paginate = (characters) => {
  const itemsPerPage = 5;
  const pages = Math.ceil(characters.length / itemsPerPage);

  const newCharacters = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return characters.slice(start, start + itemsPerPage);
  });

  return newCharacters;
};

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const res = await fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dc534221ce9847867d8aa4a092ad7230&hash=253e42c6e4680d3c2b4a7a0baa751079"
    );

    const { data } = await res.json();
    setData(paginate(data.results));
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return { loading, data };
};

export default { paginate, useFetch };
