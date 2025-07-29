import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../RTK/slice";

export default function NavBar() {
  const [searchParams, setSearchParams] = useState('');
  const dispatch = useDispatch();
  const currentBgMode = useSelector((state)=> state.bg)
  const searchHandler = (e) =>{
    setSearchParams(e.target.value)
    console.log(searchParams)
  }
  
  useDebounce({searchParams:searchParams, delay: 1000});
  // searh 파라미터가 변경되면 로딩 스켈레톤 필요하다.
  return(
    <nav className="flex flex-wrap justify-around px-[20px] py-[10px] sm:flex-nowrap">
      <Link to={'/'} className=" text-xl sm:text-2xl md:text-4xl">영화 미니 프로젝트</Link>
      <input onChange={searchHandler} placeholder="검색" className="text-black mx-0 
      grow border border-solid border-black rounded-xl bg-white pl-2 order-last w-full mt-2
      sm:mx-11 sm:order-none sm:w-2
      md:mx-[100px] md:w-5"/>

      <div>
        <button onClick={() => dispatch(toggleMode())} className="mr-2">
          {currentBgMode === 'light'?'🌙' : '☀️'}
        </button>
        <Link to={'/Login'} className="px-[4px] mt-2 mr-0.5 border bg-purple-500 rounded-[10px]">로그인</Link>
        <Link to={'/SignUp'} className="px-[4px] mt-2 mr-0.5 border bg-purple-500 rounded-[10px]">회원가입</Link>

      </div>
    </nav>
  )
}