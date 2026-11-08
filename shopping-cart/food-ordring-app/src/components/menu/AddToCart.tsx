"use client";

import { Button } from "../ui/button";
import { ProductWithRelations } from "@/src/types/product";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { formatCurrency } from "@/src/lib/formaters";
import { Checkbox } from "../ui/checkbox";
import { Extra, Size } from "@/src/lib/generated/prisma/client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import {
  addCartItem,
  removeCartItem,
  removeItemFromCart,
  selectCartItems,
} from "@/src/redux/features/cart/cartSlice";
import { ProductSizes } from "@/lib/generated/prisma/enums";
import { getItemQuantity } from "@/src/lib/cart";

function AddToCart({ item }: { item: ProductWithRelations }) {
  const cart = useAppSelector(selectCartItems);
  const quantity = getItemQuantity(item.id, cart);
  const dispatch = useAppDispatch();
  const defaultSize =
    cart.find((element) => element.id === item.id)?.size ||
    item.sizes.find((size) => size.name === ProductSizes.SMALL);
  const defaultExtras =
    cart.find((element) => element.id === item.id)?.extras || [];
  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!);
  const [selectedExtra, setSelectedExtra] = useState<Extra[]>(defaultExtras!);
  let totalPrice = item.basePrice;
  if (selectedSize) {
    totalPrice += selectedSize.price;
  }
  if (selectedExtra.length > 0) {
    for (const extra of selectedExtra) totalPrice += extra.price;
  }
  const handleAddToCart = () => {
    dispatch(
      addCartItem({
        basePrice: item.basePrice,
        name: item.name,
        id: item.id,
        image: item.image,
        size: selectedSize,
        extras: selectedExtra,
      }),
    );
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <Button size="lg" className="mt-4 text-white rounded-full px-8!">
              <span>Add To Cart </span>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-sm max-h-[80vh] overflow-y-auto">
          <DialogHeader className="flex items-center">
            <Image src={item.image} alt={item.name} width={200} height={200} />
            <DialogTitle>{item.name}</DialogTitle>
            <DialogDescription className="text-center">
              {item.description}
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="space-y-4">
            <Field className="space-y-4 text-center">
              <Label htmlFor="pick-size">Pick your size</Label>
              <PickSize
                sizes={item.sizes}
                item={item}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </Field>
            <Field className="space-y-4 text-center">
              <Label htmlFor="add-extras">Any Extras ?</Label>
              <Extras
                extras={item.extras}
                selectedExtra={selectedExtra}
                setSelectedExtras={setSelectedExtra}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            
            {quantity === 0 ? ( <Button
              type="submit"
              className="w-full h-10"
              onClick={handleAddToCart}
            >
              ADD TO Card {formatCurrency(totalPrice)}
            </Button>) : (<ChooseQuantity quantity={quantity} item={item} selectedExtras={selectedExtra} selectedSize={selectedSize} />)
            } 
           
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default AddToCart;

function PickSize({
  sizes,
  item,
  selectedSize,
  setSelectedSize,
}: {
  sizes: Size[];
  item: ProductWithRelations;
  selectedSize: Size;
  setSelectedSize: React.Dispatch<React.SetStateAction<Size>>;
}) {
  return (
    <RadioGroup
      value={selectedSize.name}
      onValueChange={(value) => {
        const newSize = sizes.find((s) => s.name === value);
        if (newSize) setSelectedSize(newSize);
      }}
      className="w-fit"
    >
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center gap-3 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem value={size.name} id={size.id} />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
//========Section EXTRA=========//

function Extras({
  extras,
  selectedExtra,
  setSelectedExtras,
}: {
  extras: Extra[];
  selectedExtra: Extra[];
  setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) {
  const handleExtra = (extra: Extra) => {
    if (selectedExtra.find((e) => e.id === extra.id)) {
      const filteredSelectedExtras = selectedExtra.filter(
        (item) => item.id !== extra.id,
      );
      setSelectedExtras(filteredSelectedExtras);
    } else {
      setSelectedExtras((prev) => [...prev, extra]);
    }
  };
  return extras.map((extra) => (
    <FieldGroup
      key={extra.id}
      className="flex items-center gap-3 border border-gray-100 rounded-md p-4"
    >
      <Field orientation="horizontal">
        <Checkbox
          id={extra.id}
          onClick={() => handleExtra(extra)}
          checked={Boolean(selectedExtra?.find((e) => e.id === extra.id))}
          name="terms-checkbox-basic"
        />
        <FieldLabel
          htmlFor={extra.id}
          className="text-sm text-accent font-medium leading-none peer-disabled:cursor-none"
        >
          {extra.name} {formatCurrency(extra.price)}
        </FieldLabel>
      </Field>
    </FieldGroup>
  ));
}

const ChooseQuantity = ({
  quantity,
  item,
  selectedExtras,
  selectedSize,
}: {
  quantity: number;
  selectedExtras: Extra[];
  selectedSize: Size;
  item: ProductWithRelations;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className='flex items-center flex-col gap-2 mt-4 w-full'>
      <div className='flex items-center justify-center gap-2'>
        <Button
          variant='outline'
          onClick={() => dispatch(removeCartItem({ id: item.id }))}
        >
          -
        </Button>
        <div>
          <span className='text-black'>{quantity} in cart</span>
        </div>
        <Button
          variant='outline'
          onClick={() =>
            dispatch(
              addCartItem({
                basePrice: item.basePrice,
                id: item.id,
                image: item.image,
                name: item.name,
                extras: selectedExtras,
                size: selectedSize,
              })
            )
          }
        >
          +
        </Button>
      </div>
      <Button
        size='sm'
        onClick={() => dispatch(removeItemFromCart({ id: item.id }))}
      >
        Remove
      </Button>
    </div>
  );
};