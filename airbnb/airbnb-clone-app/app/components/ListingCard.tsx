import Image from "next/image";
import { ListingCardItem } from "../types/app";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

type ListingCardProps = Omit<ListingCardItem, "long" | "lat">;
const ListingCard = ({
  img,
  title,
  location,
  description,
  total,
  star,
  price,
}: ListingCardProps) => {
  return <div className="px-2 py-2 border-b cursor-pointer pr-4 hover:opacity-80 transform transition duration-200 hover:animate-fade-up">
            <div className=" relative h-24 w-40 md:h-52 md:w-80 shrink-0">
                <Image src={img} fill  className="rounded-2xl object-cover" alt="Listing-Card"/>
            </div>
            <div className="flex flex-col grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer"/>
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-sm text-gray-500 grow">{description}</p>
                <div className="flex justify-between items-end pt-5">
                 <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400"/>
                    {star}
                 </p>
                 <div>
                    <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                    <p className="text-right font-extralight">{total}</p>
                 </div>

                </div>
            </div>
        </div>;
};

export default ListingCard;
