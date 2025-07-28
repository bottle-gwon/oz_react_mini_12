export default function SkeletonDetail() {
  return(
    <div className="flex justify-center items-center p-0 sm:p-2  md:p-[20px]">
      <div className="flex w-dvw h-dvh flex-col md:flex-wrap justify-center items-center  md:px-[10px] lg:flex-row">
        <div className="flex justify-center items-center mb-2 sm:px-2 md:px-[10px] md:flex-3 
        w-[150px] h-[300px] animate-pulse space-x-4
        sm:w-[300px] sm:h-[600px]
        md:w-[400px] md:h-[800px]
        ">
          <div className="w-[150px] h-[300px] bg-gray-200
            sm:w-[300px] sm:h-[600px]
            md:w-[400px] md:h-[800px]
          "></div>
        </div>

        <div className="flex flex-col h-1/2  justify-around border boder-solid rounded-[10px] px-[10px] sm:h-1/2  md:flex-4">
          <div className="flex justify-around px-[10px] flex-1 border-b animate-pulse mt-2">
            <div className="h-5 w-[150px] rounded bg-gray-200"></div>
            <div className="h-5 w-[150px] rounded bg-gray-200"></div>
          </div>

          <div className="flex-1 boredr-b border-solid border-white animate-pulse">
            <div className="h-5 w-[300px] rounded bg-gray-200 my-2 md:w-[600px]"></div>
            <div className="h-5 w-[300px] rounded bg-gray-200 md:w-[600px]"></div>
          </div>

          <div className="flex-3 flex flex-col justify-center border-t border-solid border-white animate-pulse">
            <div className="h-5 w-[300px] rounded bg-gray-200  my-2 md:w-[600px]"></div>
            <div className="h-5 w-[300px] rounded bg-gray-200  my-2 md:w-[600px]"></div>
            <div className="h-5 w-[300px] rounded bg-gray-200  my-2 md:w-[600px]"></div>
            <div className="h-5 w-[300px] rounded bg-gray-200  my-2 md:w-[600px]"></div>
          </div>

        </div>
      </div>
    </div>
  )
}