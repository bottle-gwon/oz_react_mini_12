import { useNavigate } from "react-router-dom";


export const MovieCard = (({movie}) =>{
  const navigate = useNavigate();

  return(
    <section onClick={()=> navigate(`detail/${movie.id}`) } className="flex flex-col p-[20px] w-full">
      <img className="w-full h-80 object-cover" src="https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png" alt="poster" />
        {movie.title}
        <span>평점: {movie.vote_average.toFixed(1)}</span>
    </section>
  )
})