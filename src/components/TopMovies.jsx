import { useState } from "react";
import { useFetchTopMovies } from "../hooks/useTopData";
import SkeletonSlide from "../skeleton/SkeletonSlide";
import { MovieCard } from "./MovieCard";
import { useInfiniteTopMovies } from "../hooks/useInfiniteTopMovies";

export default function TopMovies({options}) {
    // const {data:topData, isLoading: listIsLoading, error: listError} = useFetchTopMovies(options,page);

    const {movies:topData, isLoading: listIsLoading, checkNext, error: listError, sightRef} = useInfiniteTopMovies(options)


    if(listError){
        const message = listError instanceof Error ? listError.message : "알 수 없는 에러"
        return(
            <div>
                에러 발생 {message}
            </div>
        )
    }

    return(
        <div className='mt-6 min-h-[100vh]'>
              <h2 className='text-4xl text-black dark:text-white delay-100 duration-300'>최신 영화</h2>
              <div className="flex flex-wrap delay-100 duration-300 bg-white dark:bg-black">
                
                { 
                    topData.map((el)=>
                        <div key={el.id} className="w-1/2 sm:w-1/3 md:w-1/4">
                            <MovieCard key={el.id} movie={el}/>
                        </div>
                    )
                }

                {listIsLoading && <SkeletonSlide />}

                {checkNext && (
                    <div ref={sightRef} className="bg-transparent w-full">

                    </div>
                )}
              </div>
            </div>
    )
    // return(
    //     <div className='mt-6 min-h-[100vh]'>
    //           <h2 className='text-4xl text-black dark:text-white delay-100 duration-300'>최신 영화</h2>
    //           <div className="flex flex-wrap delay-100 duration-300 bg-white dark:bg-black">
                
        
    //             { 
    //               listError ? (<div>에러 발생</div>) :
    //               listIsLoading ? <SkeletonSlide /> : topData.map((el)=>
    //                 <div className="w-1/2 sm:w-1/3 md:w-1/4">
    //                   <MovieCard movie={el}/>
    //                 </div>
    //                 )
        
    //             }
    //           </div>
    //         </div>
    // )
}