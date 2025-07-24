export default function NavBar() {

  return(
    <nav className="flex justify-around px-[20px] py-[10px]">
      <h1 className="text-4xl">영화 미니 프로젝트</h1>
      <input placeholder="검색" className="text-black grow mx-[100px] border border-solid border-black rounded-xl"/>

      <div>
        <button className="px-[4px]">로그인</button>
        <button className="px-[4px]">회원가입</button>
      </div>
    </nav>
  )
}