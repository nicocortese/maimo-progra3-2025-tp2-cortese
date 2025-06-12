"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Loading from "./Loading";

const API_KEY = "8d155a452063365b70d7e38e2609b662";

const MovieDetails = ({ id }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      setError(false);
      try {
        const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
        const response = await axios.get(API_URL);
        setMovieDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.log("ERROR al cargar detalles", err);
        setError(true);
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !movieDetails) {
    return <p className="text-red-500 p-4">Error al cargar la película.</p>;
  }

  const posterUrl = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`
    : null;
  const backdropUrl = movieDetails.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
    : null;

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#d9d9d9] relative">
      {backdropUrl && (
        <Image
          src={backdropUrl}
          alt={movieDetails.title || "Fondo de la película"}
          layout="fill"
          objectFit="cover"
          className="opacity-30 fixed inset-0 z-0"
          priority
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>

      <section className="relative z-20 pt-24 p-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0">
          {posterUrl && (
            <Image
              src={posterUrl}
              alt="Póster"
              width={300}
              height={450}
              className="rounded-lg border-2 border-[#D4AF37] "
              style={{ boxShadow: "0 6px 15px rgba(217, 217, 217, 0.6)" }}
            />
          )}
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-3 text-[#D4AF37]">
            {movieDetails.title}
          </h1>
          {movieDetails.tagline && (
            <p className="italic  text-2xl text-[#D4AF37] mb-4">
              "{movieDetails.tagline}"
            </p>
          )}
          <p className="font-medium text-lg text-[#6D83EAB2] mb-6">
            Título original: {movieDetails.original_title}
          </p>

          <div className="flex items-center justify-center md:justify-start gap-3 text-2xl mb-4">
            ⭐ {movieDetails.vote_average}
            <span className="text-lg text-gray-400 ml-2">
              ({movieDetails.vote_count})
            </span>{" "}
            {/* Votos directos */}
          </div>

          <div className="text-lg text-[#6D83EAB2] mb-6 flex flex-wrap items-center justify-start gap-6">
            {movieDetails.runtime > 0 && (
              <span>🕒 {movieDetails.runtime} min</span>
            )}
            {movieDetails.adult !== undefined && (
              <span
                className={`px-4 py-1 rounded-full font-semibold ${
                  movieDetails.adult
                    ? `bg-red-700 text-white`
                    : `bg-green-600 text-white`
                }`}
              >
                {movieDetails.adult ? "Mayores de 18" : "ATP"}
              </span>
            )}
            {movieDetails.original_language && (
              <span>
                Idioma: {movieDetails.original_language.toUpperCase()}
              </span>
            )}
            {movieDetails.release_date && (
              <span>📅 Estreno: {movieDetails.release_date}</span>
            )}
          </div>

          <p className="text-xl text-[#d9d9d9] mt-4 leading-relaxed">
            {movieDetails.overview}
          </p>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
