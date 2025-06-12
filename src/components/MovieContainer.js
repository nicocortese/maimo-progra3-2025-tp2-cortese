"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Loading from "./Loading";

const API_URL =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662";

const MovieContainer = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      setError(false);
      if (!id) {
        setLoading(false);
        setError(true);
        return;
      }
      try {
        const response = await axios.get(API_URL);
        const movieData = response.data;
        setMovie(movieData);
        setLoading(false);
      } catch (err) {
        console.error(`MovieContainer: Error${id}`, err);
        setError(true);
        setLoading(false);
      }
    };
    getMovie();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-red-500 text-xl mt-20">HUBO UN ERROR al cargar los detalles de la película</p>
  
  
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : null;

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

return (
    <div className="min-h-screen text-[#d9d9d9] pt-24 p-8 relative">

    </div>
);
}

export default MovieContainer;
