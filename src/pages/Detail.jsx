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
          <div className="w-[1400px] flex-3 px-[10px]">
            <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="movie_poster" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-4 justify-around border boder-solid rounded-[10px] px-[10px]">
            <div className="flex justify-between px-[10px] flex-1">
              <p>{movieDetail.title}</p>
              <p>별점: {movieDetail.vote_average}</p>
            </div>
            <p className="flex-1">{movieDetail.genres? movieDetail.genres.map((el)=>el.name + "/") : ""}</p>
            <p className="flex-4">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
  )
}