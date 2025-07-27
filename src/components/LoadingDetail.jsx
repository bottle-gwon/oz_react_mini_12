export default function LoadingDetail() {
  return(
    <div className="flex p-[20px]">
        <div className="flex px-[10px]">
          <div className="flex-3 px-[10px] w-[500px] h-[800px] animate-pulse space-x-4">
            <div className="w-[450px] h-[800px] bg-gray-200"></div>
          </div>
          <div className="flex flex-col flex-4 justify-around border boder-solid rounded-[10px] px-[10px]">
            <div className="flex justify-around px-[10px] flex-1 border-b animate-pulse mt-2">
              <div className="h-5 w-[300px] rounded bg-gray-200"></div>
              <div className="h-5 w-[300px] rounded bg-gray-200"></div>
            </div>

            <div className="flex-1 boredr-b border-solid border-white animate-pulse">
              <div className="h-5 w-[600px] rounded bg-gray-200 my-2"></div>
              <div className="h-5 w-[600px] rounded bg-gray-200"></div>

            </div>
              <div className="flex-3  border-t border-solid border-white animate-pulse">
                <div className="h-5 w-[600px] rounded bg-gray-200  my-2"></div>
                <div className="h-5 w-[600px] rounded bg-gray-200  my-2"></div>
                <div className="h-5 w-[600px] rounded bg-gray-200  my-2"></div>
                <div className="h-5 w-[600px] rounded bg-gray-200  my-2"></div>
              </div>

          </div>
        </div>
      </div>
  )
}