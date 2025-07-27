import { useParams } from "react-router-dom"
import { Suspense, useEffect, useState } from "react";
import DetailCard from "../components/DetailCard";
import SkeletonDetail from "../skeleton/SkeletonDetail";
import ErrorDetail from "../error/ErrorDetail";





export default function Detail() {
  const {movieId } = useParams()
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false)
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
        if(!dataResponse.ok){
          throw new Error(`detail data loading fail`)
        }
        const data  = await dataResponse.json();
        setMovieDetail(data);
        // setIsLoading(false);
        
      } catch(e){
        setLoadError(true);
        console.error(e);
      } finally{
        setIsLoading(false)
      }
    }
    fetchDetail()
  },[])

  return(
    <>
      { 
      loadError ? (<ErrorDetail />) :
      !isLoading ? <DetailCard movieDetail={movieDetail} /> : <SkeletonDetail />   }
    </>
  )
}