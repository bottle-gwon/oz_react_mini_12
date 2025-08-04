export default function LoginLoading() {

  return(
    <div className="fixed bg-gray-400 dark:bg-gray-500 opacity-60 z-10 flex justify-center items-center w-dvw h-dvh">
      <div className="mr-3 border-4 border-white border-t-transparent rounded-full size-10 animate-spin"></div>
      로그인 시도중
    </div> 
  )
}