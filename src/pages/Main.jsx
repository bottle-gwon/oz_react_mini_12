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
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      navigation
      >

        {movieData.map((el) => (
          <SwiperSlide key ={el.id}>
            <MovieCard movie={el} />
          </SwiperSlide>
        ))}
      </Swiper>

  </>
)

}