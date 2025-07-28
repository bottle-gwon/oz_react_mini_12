import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { MovieCard } from "../components/MovieCard";
import SkeletonSlide from "../skeleton/SkeletonSlide";

export default function Search() {
  const [searchParams] = useSearchParams()
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchError, setSearchError] = useState(false);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_READ_API
    }
  };

  useEffect(() => {
    const fetchSearch = async () =>{
      try{
        const encodeSearch = encodeURIComponent(searchParams.get('movie'));
        //search/multi?query를 쓰면 배우, 회사, 영화 동시에 검색가능하다. 이후에 상황에 따라 변경 할것
        const searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeSearch}&include_adult=false&language=ko-KR&page=1` , options);
        if(!searchResponse.ok){
          console.log(searchResponse)
          throw new Error(`search loading fail`)
        }
          console.log(searchResponse)
        const data  = await searchResponse.json();

        setResult(data.results)
          console.log(result)

      }catch(e){
        setSearchError(true);
        console.error(e);
      }finally{
        setIsLoading(false)
      }

    }
    fetchSearch()
  },[searchParams])

  return(
    <>
      <div className="flex flex-wrap bg-black">
        {
        searchError? <div>오류 발생</div>:
        isLoading? <SkeletonSlide /> : result.map((el)=>
        <div className="w-1/4">
          <MovieCard movie={el}/>
        </div>
        )  }
        {result.length ===0 ? <div>검색 결과 없음</div> : null }
      </div>
    </>
  )
}