import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

export default function NavBar() {
  const [searchParams, setSearchParams] = useState('');
  const navigate = useNavigate()
  const searchHandler = (e) =>{
    setSearchParams(e.target.value)
    console.log(searchParams)
  }
  
  useDebounce({searchParams:searchParams, delay: 1000})
  return(
    <nav className="flex justify-around px-[20px] py-[10px]">
      <Link to={'/'} className="text-4xl">영화 미니 프로젝트</Link>
      <input onChange={searchHandler} placeholder="검색" className="text-black grow mx-[100px] border border-solid border-black rounded-xl bg-white pl-2"/>

      <div>
        <button className="px-[4px] mr-0.5 border bg-purple-500 rounded-[10px]">로그인</button>
        <button className="px-[4px] ml-0.5  border bg-purple-500 rounded-[10px]">회원가입</button>
      </div>
    </nav>
  )
}