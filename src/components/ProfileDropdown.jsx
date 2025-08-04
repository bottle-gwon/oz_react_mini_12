import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../supabase";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../RTK/slice";


export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDropDown = () =>{
    setIsOpen(!isOpen);
  }
  const imgURL = useSelector((state) => state.login)
  const {logout} = useSupabaseAuth();
  const navigate = useNavigate()
  const handleLogoutButton = () => {
    logout()
    dispatch(logoutSuccess());
    navigate('/')
  }
  return(
    <div className="relative">
      <button onClick={handleDropDown}>
        <img src={imgURL.profileImageUrl} className="w-8 rounded-full" alt="profile"/>
      </button>

      {/* 드롭다운 메뉴 */}
      <div className={`${isOpen? 'block': 'hidden'} w-30 absolute mt-2 right-1.5 flex flex-col justify-center items-center z-10 border px-2 rounded-xl bg-gray-200 dark:bg-gray-600`}>
        <Link to={'/'}>마이페이지</Link>
        <button onClick={handleLogoutButton}>로그아웃</button>
      </div>
    </div>

  )
}