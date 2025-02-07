import React from 'react';
import { Product } from '../../sanity.types';
import toast from 'react-hot-toast';
import { FiPlus, FiMinus } from "react-icons/fi";
import userCartStore from '../../store';

interface Props {
  product: Product;
  className?: string;
  onQuantityChange: (id: string, quantity: number) => void;  // Add this prop to handle quantity change
}

const QuantityButton = ({ product, className, onQuantityChange }: Props) => {
  const { addItem, removeItem, getItemCount } = userCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stockLevel === 0;

  // Remove product from cart and update quantity
  const handleRemoveProduct = () => {
    removeItem(product?._id);
    if (itemCount > 1) {
      toast.success("Quantity Decreased successfully");
      onQuantityChange(product?._id, itemCount - 1);  // Pass the updated quantity
    } else {
      toast.success(`${product?.name?.substring(0, 12)}... removed successfully`);
      onQuantityChange(product?._id, 0);  // Set quantity to 0 when item is removed
    }
  };

  // Add product to cart and update quantity
  const handleAddProduct = () => {
    if (isOutOfStock) {
      toast.error("Product is out of stock");
      return;  // Don't add product if out of stock
    }

    addItem(product);
    toast.success("Quantity Increased successfully");
    onQuantityChange(product?._id, itemCount + 1);  // Pass the updated quantity
  };

  return (
    <div className={`flex text-[#757679] items-center overflow-hidden w-14 justify-center ${className}`}>
      <button
        onClick={handleRemoveProduct}
        className={`flex-none w-3 h-4 bg-[#E7E7EF] text-center hover:bg-gray-200 active:bg-gray-300 text-xs flex items-center justify-center ${itemCount === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={itemCount === 0}  // Disable button if item count is 0
      >
        <FiMinus />
      </button>
      <div className="flex-1 text-center bg-[#F0EFF2] text-xs flex items-center justify-center">
        {itemCount}
      </div>
      <button
        onClick={handleAddProduct}
        className={`flex-none w-3 h-4 bg-[#E7E7EF] text-center hover:bg-gray-200 active:bg-gray-300 text-xs flex items-center justify-center ${isOutOfStock ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={isOutOfStock}  // Disable button if product is out of stock
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
