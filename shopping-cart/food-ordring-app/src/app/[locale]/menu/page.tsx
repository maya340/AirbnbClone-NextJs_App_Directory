import Menu from "@/src/components/menu"
import { getProductsByCategory } from "@/src/server/db/product"



async function MenuPage() {
    
    const categorites = await getProductsByCategory()

  return (
    <main>{
         categorites.map(category => (
            <section key={category.id} className="section-gap">
                    <div className="container text-center">
                        <h1 className="text-primary text-4xl mb-6 font-bold italic"> {category.name}</h1>
                        <Menu items={category.products}/>
                    </div>
            </section>
         ))
    }</main>
  )
}

export default MenuPage