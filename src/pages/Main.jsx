import { MovieCard } from '../components/MoviCard'
import listData from '../../data/movieListData.json'
import { useEffect, useState } from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css';

export default function Main() {
  const [movieData, setMovieData] = useState([])

  useEffect(()=>{
    setMovieData(listData.results);
  },[])

return(
  <>
    <Swiper
      modules={[Scrollbar, Navigation ,Pagination]}
      spaceBetween={0}
      slidesPerView={4}
      // pagination={{ type: 'custom' }}
      pagination={{
        clickable: true,
        el: '.swiper-pagination',
        type:'bullets',
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'

      }}
      >
        {movieData.map((el) => (
          <SwiperSlide key ={el.id}>
            <MovieCard movie={el} />
          </SwiperSlide>
        ))}
        <div className='swiper-button-prev absolute top-1/2 left-3 z-10 hover:drop-shadow-xl hover:drop-shadow-[rgba(0,0,0,0.5)]  hover:scale-[1.5] duration-[0.15s] border bg-indigo-300 rounded-2xl px-1'>
          <p className='text-3xl'>이전</p>
        </div>
        <div className='swiper-button-next absolute top-1/2 right-3 z-10 hover:drop-shadow-xl hover:drop-shadow-[rgba(0,0,0,0.5)]  hover:scale-[1.5] duration-[0.15s] border bg-indigo-300 rounded-2xl px-1'>
          <p className='text-3xl'>다음</p>
        </div>

      </Swiper>

  </>
)

}