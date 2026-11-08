import CartItem from "./_component/CartItem"
import CheckoutForm from "./_component/CheckoutForm"

function CartPage() {
  return (
    <main>
        <section className="section-gap">
            <div className="container">
                <h1 className="text-primary text-center text-4xl font-bold mb-10 italic">
                    Cart
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <CartItem/>
                    <CheckoutForm/>
                </div>
            </div>
        </section>
    </main>
  )
}

export default CartPage