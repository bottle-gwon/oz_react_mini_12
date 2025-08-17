import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useDebounce = ({searchParams, delay}) => {
  const navigate = useNavigate()

  useEffect(()=>{
    const debounderTimer = setTimeout(()=>{
    searchParams === '' ? null : navigate(`/search?movie=${searchParams}`)
  
    },delay)
  
    return () => clearTimeout(debounderTimer)
  },[searchParams, delay])
}