import Image from "next/image";
import { LiveItem } from "../types/app";

type LiveCardProps = LiveItem;
const LiveCard = ({img,title} : LiveCardProps) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 animate-fade-up"> 
        <div className="relative w-80 h-80 hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
            <Image src={img} alt="LiveCard-image" fill/>
        </div>
       <h3 className="
  text-2xl 
  mt-3 
  font-semibold 
  text-black 
  backdrop-blur-sm 
  bg-white/10 
  px-3 
  py-1 
  rounded-lg 
  hover:bg-white/20 
  transition 
  duration-300
">
  {title}
</h3>

    </div>
  )
}

export default LiveCard