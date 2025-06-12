"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard";
import Loading from "./Loading";



const API_URL =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getTrending = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        const TrendingMovies = response.data.results;
        setMovies(TrendingMovies);
        setLoading(false);
      } catch (error) {
        console.log("ERROR al cargar películas", error);
        setError(true);
      }
    };
    getTrending();
  }, []);

  return (
    <section className=" py-8 lg:px-6">
      <div className="flex items-center mb-1">
        <h2 className="text-2xl font-bold text-[#d9d9d9] mb-4 font-outfit">
          Películas del momento
          <span className="text-[#D4AF37] ml-2 cursor-pointer">| Filtrar</span>
        </h2>
      </div>
      <div className="flex overflow-x-auto gap-5 pb-4 pt-6 custom-scrollbar px-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesGrid;
