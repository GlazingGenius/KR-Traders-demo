import { ZeptoProductCard } from './ZeptoProductCard';
import type { Product, CartItem } from '../../App';

type ZeptoProductGridProps = {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
};

export function ZeptoProductGrid({ products, cart, addToCart, updateCartQuantity }: ZeptoProductGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {products.map(product => {
        const cartItem = cart.find(item => item.product.id === product.id);
        return (
          <ZeptoProductCard
            key={product.id}
            product={product}
            cartQuantity={cartItem?.quantity || 0}
            addToCart={addToCart}
            updateCartQuantity={updateCartQuantity}
          />
        );
      })}
    </div>
  );
}
