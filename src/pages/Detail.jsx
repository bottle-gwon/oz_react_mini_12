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
      <div className="flex">
        <div className="flex ">
          <div className="w-[1400px] gorw-[3]">
            <img src={movieDetail.poster_path} alt="movie_poster" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col grow">
            <div className="flex justify-between">
              <p>{movieDetail.title}</p>
              <p>별점: {movieDetail.vote_average}</p>
            </div>
            <p>{movieDetail.genres? movieDetail.genres.map((el)=>el.name + "/") : ""}</p>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
      </div>
  )
}