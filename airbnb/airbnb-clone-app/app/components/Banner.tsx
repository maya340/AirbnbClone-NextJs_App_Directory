import Image from "next/image"

 const Banner = () => {
   return (
     <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
        <Image src={"https://adro.gov.ae/-/media/Project/Expat-Bureau/Expat-Bureau/AD1_5New/AboutAD/WhereisAD/WhereisAD.jpg?h=458&w=540&hash=1DA96DA834BF1329CC61CEB375773F06"} alt="places" fill sizes="100vw"
        />
        <div className="absolute w-full top-1/2 text-center">
              <p className="text-sm sm:text-lg text-amber-100">Not sure Where to go? perfect</p>
              <button type="button" className="text-blue-500  bg-white/50 border-2 py-4 px-10 shadow-md rounded-full cursor-pointer">
                I am flexible
              </button>
        </div>
     </div>
   )
 }
 
 export default Banner