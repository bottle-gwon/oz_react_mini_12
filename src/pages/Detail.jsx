import { useParams } from "react-router-dom"
import detailData from "../../data/movieDetailData.json"
import { Suspense, useEffect, useState } from "react";
export default function Detail() {
  const {movieId } = useParams()
  const [movieDetail, setMovieDetail] = useState({});
  console.log(movieId);

  useEffect(()=>{
    setMovieDetail(detailData);
  },[])
// justify-center items-center h-dvh basis-2xl
  return(
      <div className="flex p-[20px]">
        <div className="flex px-[10px]">
          <div className="flex-3 px-[10px]">
            <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="movie_poster" className="object-cover" />
          </div>
          <div className="flex flex-col flex-4 justify-around border boder-solid rounded-[10px] px-[10px]">
            <div className="flex justify-around px-[10px] flex-1 border-b">
              <p className="text-6xl">{movieDetail.title}</p>
              <p className="text-4xl">⭐️: {movieDetail.vote_average? movieDetail.vote_average.toFixed(1): ""}</p>
            </div>
            <p className="flex-1 border-b"> 장르: {movieDetail.genres? movieDetail.genres.map((el)=>el.name + "/ ") : ""}</p>
            <p className="flex-4">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
  )
}