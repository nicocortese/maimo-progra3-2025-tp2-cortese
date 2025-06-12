import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` 
    : null;

  const rating = movie.vote_average ? movie.vote_average : null;
  const heightClass = "h-[420px]";


  return (
    <Link
      href={`/movie/${movie.id}`}
      className={`flex-shrink-0 w-52 ${heightClass} rounded-t-2xl overflow-hidden text-[#d9d9d9] 
      cursor-pointer transform transition-all duration-200 hover:scale-105 flex flex-col`}
    >
      <div className="h-72 relative overflow-hidden bg-gray-800">
        <Image
          src={imageUrl}
          alt={movie.title || `Póster`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="bg-[#1a1a1a] p-3 flex flex-col justify-between flex-grow">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center w-full h-[22px]">
          {rating !== null && (
            <div className="flex items-center">
              <p className=" mr-1 text-[#d9d9d9] font-semibold text-sm">
                ⭐{rating}
              </p>
            </div>
          )}
        </div>
        <h3 className="font-semibold leading-tight mt-1 mb-2 text-center">
          {movie.title}
        </h3>
        </div>
        <button className="bg-[#6D83EA]/70 text-[#1e1e1e] font-bold py-2 px-4 rounded-full 
        text-center text-sm w-full cursor-pointer transform transition-transform duration-200 hover:bg-[#6D83EA]">
          + Agregar a la lista
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;
