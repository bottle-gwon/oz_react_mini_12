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
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ type: 'custom' }}
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
        <div className='swiper-button-prev'>
          <p>이전</p>
        </div>
        <div className='swiper-button-next'>
          <p>다음</p>
        </div>
      </Swiper>

  </>
)

}