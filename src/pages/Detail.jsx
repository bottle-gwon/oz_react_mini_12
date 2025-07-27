import { useParams } from "react-router-dom"
import { Suspense, useEffect, useState } from "react";
import LoadingDetail from "../components/LoadingDetail";
import DetailCard from "../components/DetailCard";





export default function Detail() {
  const {movieId } = useParams()
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  console.log(movieId);
   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_READ_API
    }
  };
  useEffect(()=>{
    // setMovieDetail(detailData);
    const fetchDetail = async () => {
      try{
        const dataResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`, options)
        setIsLoading(true);
        if(!dataResponse.ok){
          throw new Error(`detail data loading fail`)
        }
        const data  = await dataResponse.json();
        setMovieDetail(data);

      } catch(e){
        console.error(e);
      }
    }
    fetchDetail()
  },[])
  return(
    <>
      {isLoading ? <DetailCard movieDetail={movieDetail} /> : <LoadingDetail />   }
    </>
  )
}