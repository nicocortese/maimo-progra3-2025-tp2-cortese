import MovieDetails from "@/components/MovieDetails"

const Movie = async ({params}) => {
    const {id} = await params
  return (
    <MovieDetails id ={id} />
  )
}

export default Movie