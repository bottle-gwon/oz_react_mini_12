import { useState } from "react";
import { useFetchTopMovies } from "../hooks/useTopData";
import SkeletonSlide from "../skeleton/SkeletonSlide";
import { MovieCard } from "./MovieCard";

export default function TopMovies({options}) {
    const [page, setPage] = useState(1);
    const {data:topData, isLoading: listIsLoading, error: listError} = useFetchTopMovies(options,page);

    return(
        <div className='mt-6'>
              <h2 className='text-4xl text-black dark:text-white delay-100 duration-300'>최신 영화</h2>
              <div className="flex flex-wrap delay-100 duration-300 bg-white dark:bg-black">
                
        
                { 
                  listError ? (<div>에러 발생</div>) :
                  listIsLoading ? <SkeletonSlide /> : topData.map((el)=>
                    <div className="w-1/2 sm:w-1/3 md:w-1/4">
                      <MovieCard movie={el}/>
                    </div>
                    )
        
                }
              </div>
            </div>
    )
}