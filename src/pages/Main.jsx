import { lazy, Suspense, useEffect, useState } from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css';
import './pagination.css'
import { MovieCard } from '../components/MovieCard';
import SkeletonSlide from '../skeleton/SkeletonSlide';


export default function Main() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false)

  const [topData, setTopData] = useState([]);
  const [listIsLoading, setListIsLoading] = useState(true);
  const [listError, setListError] = useState(false)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_READ_API
    }
  };

  useEffect(()=>{
    // setMovieData(listData.results);
    const fetchMovie = async () => {
      try{
        const dataResponse = await fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
        if(!dataResponse.ok){
          throw new Error(`data loading fail`)
        }
        const data  = await dataResponse.json();
        console.log(data.results)
        setMovieData(data.results.filter((el) => !el.adult));
        // setIsLoading(false);
      } catch(e){
        console.error(e);
        setError(true);
      } finally{
        setIsLoading(false);
      }
    }
    fetchMovie()
  },[])


  useEffect(()=>{
    const fetchTopData = async() =>{
      try{
        const topDataResponse = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1', options)
        if(!topDataResponse.ok){
          throw new Error(`top data list loading fail`)
        }
        const topData = await topDataResponse.json();

        setTopData(topData.results.filter((el) => !el.adult))
      }
      catch(e){
        console.error(e);
        setListError(true);
      }finally{
        setListIsLoading(false);
      }

  }

  fetchTopData()
  },[])



return(
  <div className='bg-white dark:bg-black delay-100 duration-300'>
    <div className='border border-gray-500 bg-white rounded-2xl shadow-2xl py-2 px-2.5 dark:bg-black delay-100 duration-300'>
      <h2 className='text-4xl text-black dark:text-white delay-100 duration-300'>현재 인기 있는 영화</h2>

      {
      error ? (<div>에러 발생</div>) :
      isLoading ? <SkeletonSlide /> : 
        <Swiper
          modules={[Scrollbar, Navigation ,Pagination]}
          spaceBetween={0}
          slidesPerView={2}
          slidesPerGroup={2}
          pagination={{ clickable: true,
              el: '.swiper-pagination-container',
          }}

          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          
          }}

          breakpoints={{
            630: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,

            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,            
            }

        }} 
          > 
              {movieData.map((el) => {
                console.log(el);
                return (
                <SwiperSlide key ={el.id} >
                  <MovieCard movie={el} />
                </SwiperSlide>
              )})}

            <div className='swiper-button-prev absolute top-1/2 left-0.5 z-10 select-none hover:drop-shadow-xl hover:drop-shadow-[rgba(0,0,0,0.5)]  hover:scale-[1.5] duration-[0.15s] border border-gray-600  rounded-2xl px-1'>
              <p className='text-5xl text-gray-400 dark:text-white delay-100 duration-300'>{'<'}</p>
            </div>
            <div className='swiper-button-next absolute top-1/2 right-0.5 z-10 select-none hover:drop-shadow-xl hover:drop-shadow-[rgba(0,0,0,0.5)]  hover:scale-[1.5] duration-[0.15s] border border-gray-600 rounded-2xl px-1'>
              <p className='text-5xl text-gray-400 dark:text-white delay-100 duration-300'>{'>'}</p>
            </div>
            <div className='flex justify-center'>
              <div className="flex swiper-pagination-container absolute bottom-0 z-10"></div> 
            </div>
        </Swiper>
        
      }

    </div>

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

  </div>
)

}