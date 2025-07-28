export default function SkeletonSlide() {
  return(
    <section  className="flex flex-col justify-between p-[20px] h-full animate-pulse">
      <div className="w-[380px] h-[500px] bg-gray-200"></div>
      <div className="h-5 w-[300px] rounded bg-gray-200 mt-3"></div>
      <div className="h-5 w-[300px] rounded bg-gray-200 mt-3"></div>
    </section>
  )
}