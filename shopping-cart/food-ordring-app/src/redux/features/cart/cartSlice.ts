import { Extra, Size } from "@/src/lib/generated/prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";



export type CartItem = {
name : string;
id :string;
image:string;
basePrice:number;
quantity?:number;
size?:Size;
extras?:Extra;
}

type CartState ={
    items : CartItem[];
}



const getInitialCartItems = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    try {
      const initialCartItem = localStorage.getItem('cartItems');
      return initialCartItem ? JSON.parse(initialCartItem) : [];
    } catch (error) {
      console.error('Failed to parse cart items from localStorage', error);
      return [];
    }
  }
  return [];
};



const initialState :  CartState={
    items : getInitialCartItems(),
};
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartItem:(state,action:PayloadAction<CartItem>)=>{
 const existingItem = state.items.find(item => item.id === action.payload.id)

        if(existingItem){
            existingItem.quantity = (existingItem.quantity || 0) + 1;
            existingItem.size = action.payload.size;
            existingItem.extras = action.payload.extras;
        }else{
            state.items.push({...action.payload,quantity:1})
        }
        },
        removeCartItem:(state,action:PayloadAction<{id : string}>)=>{
            const item = state.items.find(item => item.id === action.payload.id)
            if(item){
                if(item.quantity === 1){
                     state.items = state.items.filter(item => item.id !== action.payload.id)
                }else{
                    item.quantity = (item.quantity || 1) - 1;
                }
            }
    },
    removeItemFromCart:(state,action:PayloadAction<{id : string}>)=>{
             state.items = state.items.filter(item => item.id !== action.payload.id)
    },
        clearCart:(state)=>{
            state.items = [];
        },
    
}})

export const {addCartItem,removeCartItem,removeItemFromCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
export const selectCartItems = (state : RootState) => state.cart.items;

