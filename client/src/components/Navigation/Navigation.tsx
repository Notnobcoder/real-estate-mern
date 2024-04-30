import { Menu, Search, ShoppingBag } from "lucide-react"

export const Navigation = () => {
  return (
    <div className=" flex items-center justify-between gap-4 py-4">
      <div className="flex gap-2">
        <Menu className="cursor-pointer" onClick={() => console.log("hello world")} />
        <img src={"/logoIcon.png"} />
        <img src={"/logo.png"} />
      </div>
      <div className="flex items-center gap-2">
        <Search />
        <ShoppingBag />
        <div className="rounded-full bg-black w-4 h-4 flex items-center justify-center  p-2">
          <p className="text-white">3</p>
        </div>
      </div>
    </div>
  )
}
