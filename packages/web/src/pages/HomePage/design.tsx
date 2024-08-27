
const Design = () => {
  return (
    <div className="bg-gray-900 h-screen relative ">
      <div className=" absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-emerald-300/5
      shadow-[0_0_80px_inset]
      shadow-emerald-300/5
      rounded-full">
      </div>

      <div className=" absolute inset-0 size-[810px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-emerald-300/5
      shadow-[0_0_80px_inset]
      shadow-emerald-300/5
      rounded-full">
      </div>


      <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="
      border-2
          size-[300px]
      animate-spin
      [animation-duration:5s]
      ">
          <div className="size-[200px] border-2 bg-red-500 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>

        </div>
      </div>

      <h4 className="text-5xl bg-gradient-to-r from-emerald-400 to-sky-500">Build Exeptional User Interface</h4>
    </div>
  )
}

export default Design


