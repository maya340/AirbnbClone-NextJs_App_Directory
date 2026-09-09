import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"

 
 const Navbar = () => {
   return (
     <div className="flex space-x-4 items-center justify-end text-gray-500 mb-3">
        <p className="hidden md:inline cursor-pointer">Becom a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>
        <div className="flex p-2 space-x-2 rounded-full border-2 my-6  text-gray-500">
            <MenuIcon className="h-6"/>
            <UserCircleIcon className="h-6"/>
        </div>
     </div>
   )
 }
 
 export default Navbar