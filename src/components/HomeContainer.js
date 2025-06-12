"use client";

import Hero from "@/components/Hero";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const API_URL =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662";

const HomeContainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        const moviesData = response.data.results;
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.log("Error de películas", error);
        setLoading(false);
        setError(true);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {!loading && <Hero movies={movies} />}
      {loading && <Loading />}
    </>
  );
};

export default HomeContainer;
