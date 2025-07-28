import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { MovieCard } from "../components/MovieCard";

export default function Search() {
  const [searchParams] = useSearchParams()
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

        const searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeSearch}&include_adult=false&language=ko-KR&page=1` , options);
        if(!searchResponse.ok){
          console.log(searchResponse)
          throw new Error(`search loading fail`)
        }
        const data  = await searchResponse.json();

        setResult(data.results)
      }catch(e){
        console.error(e);
      }finally{
        setIsLoading(false)
      }

    }
    fetchSearch()
  },[searchParams])

  return(
    <>
      {/* {console.log(result)} */}
      {/* {searchParams.get('movie')} */}
      <div className="flex flex-wrap bg-black">
        {result.map((el)=>
        <div className="w-1/4">
          <MovieCard movie={el}/>
        </div>
        )}
      </div>
    </>
  )
}