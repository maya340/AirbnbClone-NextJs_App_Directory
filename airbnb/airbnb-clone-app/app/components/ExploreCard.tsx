import Image from "next/image"
import { ExploreItem } from "../types/app"

type ExploreItemProps = ExploreItem
const ExploreCard = ({img , location ,distance}: ExploreItemProps) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative w-16 h-16 hover:scale-[1.03] transition-transform">
      <Image src={img} alt="ExplorCard-img" fill/>
      </div>
      <div>
        <h2 className="hover:translate-x-[2px] transition-all">{location}</h2>
        <h3 className="text-gray-600">{distance}</h3>
      </div>
      </div>
  )
}

export default ExploreCard