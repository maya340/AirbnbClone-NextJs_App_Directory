import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

const Header = ({placeholder}:{placeholder?: string}) => {
  return (
    <header className="sticky py-0 top-0 shadow-md z-99 bg-white">
      <div className="container grid grid-cols-3 relative">
        <Link href="/" className="relative h-20  flex items-center my-auto">
          <Image src="/logo.webp" alt="logo-img" fill className="object-contain object-left"/>
        </Link>
        <Searchbar placeholder={placeholder}/>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;
