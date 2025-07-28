import listData from '../../data/movieListData.json'
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


  



return(
  <>

    {
    error ? (<div>에러 발생</div>) :
    isLoading ? <SkeletonSlide /> : 
      <Swiper
        modules={[Scrollbar, Navigation ,Pagination]}
        spaceBetween={0}
        slidesPerView={2}
        pagination={{ clickable: true,
            el: '.swiper-pagination-container',
        }}

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        
        }}

        breakpoints={{
          630: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }

      }}  
        >
          
            {movieData.map((el) => {
              console.log(el);
              return (
              <SwiperSlide key ={el.id}>
                <MovieCard movie={el} />
              </SwiperSlide>
            )})}

          <div className='swiper-button-prev absolute top-1/2 left-3 z-10 select-none hover:drop-shadow-xl hover:drop-shadow-[rgba(0,0,0,0.5)]  hover:scale-[1.5] duration-[0.15s] border bg-indigo-300 rounded-2xl px-1'>
            <p className='text-3xl'>{'<'}</p>
          </div>
          <div className='swiper-button-next absolute top-1/2 right-3 z-10 select-none hover:drop-shadow-xl hover:drop-shadow-[rgba(0,0,0,0.5)]  hover:scale-[1.5] duration-[0.15s] border bg-indigo-300 rounded-2xl px-1'>
            <p className='text-3xl'>{'>'}</p>
          </div>
          <div className='flex justify-center'>
            <div className="flex swiper-pagination-container absolute bottom-0 z-10"></div> 
          </div>
      </Swiper>
      
    }

  </>
)

}