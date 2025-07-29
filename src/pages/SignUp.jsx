export default function SignUp() {

  return(
    <div className="flex h-dvh justify-center sm:items-center">
      <form className="flex flex-col sm:border rounded-2xl p-2 w-[350px] h-[300px]">
        <h1 className="text-3xl">회원가입</h1>
        <label htmlFor='email'>이메일</label>
        <input type="emial" id='email' className="border"/>
        <label htmlFor='name'>이름</label>
        <input id='name' className="border"/>
        <label htmlFor='password'>비밀번호</label>
        <input type="password" id="password" className="border"/>
        <label htmlFor='rePassword'>비밀번호 재입력</label>
        <input type="password" id="rePassword" className="border"/>
        <br />
        <button type="submit" className="border">회원가입</button>
      </form>
    </div>
  )
}