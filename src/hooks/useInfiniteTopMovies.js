import axios from "axios";
import { useCallback, useState } from "react"
import { useInfiniteScroll } from "./useInfiniteScroll";


export const useInfiniteTopMovies = (options) => {
    const [movies, setMovies] = useState([]);       //영화 목록
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [checkNext, setCheckNext] = useState(true);

    const loadMore = useCallback(async() => {
        if(isLoading || !checkNext) return; //로딩중이거나 다음데이터 없으면 종료
        console.log('hello')

        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=${currentPage}`, options)
            const newMovies = response.data.results.filter((el) => !el.adult);
            if(newMovies.length === 0){
                setCheckNext(false)
            }else{
                setMovies(preMovies => [...preMovies, ...newMovies]);
                setCurrentPage(prevPage => prevPage + 1);
            }

        } catch (error) {
            console.error(error);
            setError(error);
        } finally{
            setIsLoading(false);
        }
    },[isLoading, checkNext, currentPage, options])

    const sightRef = useInfiniteScroll(loadMore , {threshold: 0.1});

    return {movies, isLoading, error, checkNext, sightRef}

} 