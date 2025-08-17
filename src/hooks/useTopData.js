import axios from "axios";
import { useEffect, useState } from "react"


export const useFetchTopMovies = (options, page = 1) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=${page}` ,options);

                setData(response.data.results.filter((el)=> !el.adult))

            } catch (error) {
                console.error(`최신 영화 다운로드 실패${error}`);
                setError(error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchMovieData();
    }, [page])


    return {data, isLoading, error}
}