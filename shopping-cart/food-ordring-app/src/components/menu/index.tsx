import { ProductWithRelations } from "@/src/types/product"
import MenuItem from "./MenuItem"
import getTrans from "@/src/lib/translation";
import getCurrentLocale from "@/src/lib/getCurrentLocale";


async function Menu({items}:{items: ProductWithRelations[]}) {
  const locale = await getCurrentLocale();
  const {noProductsFound} = await getTrans(locale);

  return ( items.length > 0 ?( <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {items.map((item) => (
                <MenuItem key={item.id} item={item}/>
              ))}
            </ul>)
            :(
              <p className="text-accent text-center">{noProductsFound}</p>
            )
   
  )
}

export default Menu
