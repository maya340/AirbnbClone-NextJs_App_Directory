
import { Routes } from "@/src/constans/enum"
import Link from "../links"
import NavBar from "./NavBar"
import CartButton from "./cart-Button"
import getTrans from "@/src/lib/translation";
import getCurrentLocale from "@/src/lib/getCurrentLocale";
import LanguageSwitcher from "./language-switcher";

async function Header() {
  const locale = await getCurrentLocale();
  const { logo,navbar } = await getTrans(locale);
  return (
    <header className="py-4 md:py-6">
        <div className="container flex items-center justify-between">
            <Link href= {`/${locale}`} className="text-primary font-semibold text-2xl">
            🍕 {logo}
            </Link>
            <NavBar translations={navbar}/>
            <LanguageSwitcher />
            <CartButton/>
        </div>
    </header>
  )
}

export default Header