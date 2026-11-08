import { CartItem } from "../redux/features/cart/cartSlice";


export const deliveryFree = 5;

export const getCardQuantity=(cart : CartItem[])=>{
    return cart.reduce((quantity, item) => item.quantity! + quantity, 0)
}
export const getItemQuantity=(id : string, cart : CartItem[])=>{
    return cart.find((item) => item.id === id)?.quantity || 0;
    
}
export const getSubTotal = (cart:CartItem[])=>{
  return cart.reduce((total,cartItem)=>{
    const extrasTotal = cartItem.extras?.reduce((sum,extras)=>  sum + (extras.price || 0),0)
    const itemTotal = (cartItem.basePrice || 0) + (cartItem.size?.price || 0) + (extrasTotal || 0)
    return total + (itemTotal * (cartItem.quantity || 0))
  },0)
  
}
export const getTotalAmount =(cart : CartItem[])=>{
 return getSubTotal(cart) + deliveryFree
}