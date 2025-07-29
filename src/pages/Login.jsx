import { Link } from "react-router-dom";

export default function Login() {

  return(
    <div className="flex h-dvh justify-center sm:items-center">
      <form className="flex flex-col sm:border rounded-2xl p-2 w-[350px] h-[300px]">
        <h1 className="text-3xl">Login</h1>
        <br/>
        <label htmlFor='email' required autoFocus>이메일</label>
        <input type="emial" id='email' className="border"/>
        <label htmlFor='password' >비밀번호</label>
        <input type="password" id="password" className="border"/>
        <br />
       
        <button type="submit" className="border">로그인</button>
        <Link to={"/SignUp"} className="border mt-2 text-center">회원가입</Link>
      </form>
    </div>
  )
}