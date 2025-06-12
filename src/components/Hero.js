"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return null;
  }
  const featuredMovie = movies[0];

  const backdropUrl = featuredMovie.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}`
    : undefined;

const movieDetails = featuredMovie.id ? `/movie/${featuredMovie.id}` : `#`;

  return (
    <section className="relative w-full h-[600px] flex items-center overflow-hidden"
    style={{ boxShadow: "0 6px 15px rgba(217, 217, 217, 0.6 "}}>
      <Image
        src={backdropUrl}
        alt="Fondo hero"
        layout="fill"
        objectFit="cover"
        className="opacity-40"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent z-10"></div>

      



      <div className="absolute inset-0 z-20 content h-full text-[#d9d9d9] flex flex-col justify-center items-start pl-[85px] ">
        <h1 className="text-5xl  font-bold mb-4 ">{featuredMovie.title}</h1>
        <p className="max-w-xl text-base mb-8">{featuredMovie.overview}</p>
        <div className="flex gap-4">
          <button className="bg-[#D4AF37] text-[#1e1e1e] px-7 py-3 rounded-full flex items-center gap-[5px] 
          font-semibold transition-all duration-300 hover:bg-[#D4AF37]/70 cursor-pointer ">
            Ver ahora
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </button>
          <Link href={movieDetails}>
          <button className="bg-[#6D83EAB2]/70 text-[#1e1e1e] px-7 py-3 rounded-full flex items-center gap-[5px] 
          font-semibold  transition-all duration-300 hover:bg-[#6D83EAB2] cursor-pointer">
            Detalles
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"> 
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
