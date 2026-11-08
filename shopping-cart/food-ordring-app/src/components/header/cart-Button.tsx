"use client";

import { Routes } from "@/src/constans/enum";
import Link from "../links";
import { ShoppingCartIcon } from "lucide-react";
import { getCardQuantity } from "@/src/lib/cart";
import { useAppSelector } from "@/src/redux/hooks";
import { selectCartItems } from "@/src/redux/features/cart/cartSlice";

function CartButton() {
  const cart = useAppSelector(selectCartItems);
  const cartQuantity = getCardQuantity(cart);

  return (
    <Link href={`/${Routes.CART}`} className="block relative">
      {cartQuantity > 0 && (
        <span className="absolute inset-s-4 -top-4 w-5 h-5 text-sm bg-primary rounded-full text-white text-center flex items-center justify-center">
          {cartQuantity}
        </span>
      )}
      <ShoppingCartIcon
        className="text-accent group-hover:text-primary duration-200 transition-colors w-6 h-6"
      />
    </Link>
  );
}

export default CartButton;