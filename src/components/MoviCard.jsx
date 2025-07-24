import { useNavigate } from "react-router-dom";


export const MovieCard = (({movie}) =>{
  const navigate = useNavigate();

  return(
    <section onClick={()=> navigate(`detail/${movie.id}`) } className="flex flex-col p-[20px] w-full">
      <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
        {movie.title}
        <span>평점: {movie.vote_average.toFixed(1)}</span>
    </section>
  )
})