import { useNavigate } from "react-router-dom";


export const MovieCard = (({movie}) =>{
  const navigate = useNavigate();

  console.log("woriking");
  return(
    <section onClick={()=> navigate(`detail/${movie.id}`) } className="flex flex-col justify-between p-[20px] h-full">
      <img className="w-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
        {movie.title}
        <span>⭐️: {movie ? movie.vote_average.toFixed(1) : ""}</span>
    </section>
  )
})
