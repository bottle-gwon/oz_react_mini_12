import { useNavigate } from "react-router-dom";


export const MovieCard = (({movie}) =>{
  const navigate = useNavigate();

  return(
    <section onClick={()=> navigate(`/detail/${movie.id}`) } className="flex flex-col justify-end p-[20px] h-full">
      <img className="w-full object-cover aspect-3/4" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
       <p className="text-black dark:text-white delay-100 duration-300">{movie.title}</p> 
        <span className="text-black dark:text-white delay-100 duration-300">⭐️: {movie ? movie.vote_average.toFixed(1) : ""}</span>
    </section>
  )
})
