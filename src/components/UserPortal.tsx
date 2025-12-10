import { useState } from 'react';
import { ZeptoHeader } from './user/ZeptoHeader';
import { ZeptoCategories } from './user/ZeptoCategories';
import { ZeptoProductGrid } from './user/ZeptoProductGrid';
import { ZeptoCart } from './user/ZeptoCart';
import { CheckoutModal } from './user/CheckoutModal';
import { ZeptoBanner } from './user/ZeptoBanner';
import { ZeptoFooter } from './user/ZeptoFooter';
import type { Product, CartItem, Category } from '../App';
import { ShoppingBag } from 'lucide-react';

type UserPortalProps = {
  products: Product[];
  categories: Category[];
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

export function UserPortal({
  products,
  categories,
  cart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart
}: UserPortalProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Apply search filter
  const searchedProducts = searchQuery.trim() === ''
    ? filteredProducts
    : filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.finalPrice * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Header */}
      <ZeptoHeader 
        cartCount={totalItems} 
        onCartClick={() => setShowCart(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Banner */}
      <ZeptoBanner />

      {/* Categories */}
      <div className="sticky top-[112px] z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-lg">
        <ZeptoCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto px-4 py-8 ${cart.length > 0 ? 'mb-32' : 'mb-0'}`}>
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl text-gray-900 mb-2">
            {searchQuery.trim() !== '' 
              ? `Search Results for "${searchQuery}"` 
              : selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          <p className="text-gray-600">
            Showing <span className="text-teal-600">{searchedProducts.length}</span> premium products
          </p>
        </div>

        {searchedProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
              <span className="text-6xl">🔍</span>
            </div>
            <h3 className="text-2xl text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try searching with different keywords</p>
          </div>
        ) : (
          <ZeptoProductGrid
            products={searchedProducts}
            cart={cart}
            addToCart={addToCart}
            updateCartQuantity={updateCartQuantity}
          />
        )}
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 hover:from-teal-700 hover:via-cyan-700 hover:to-teal-800 text-white px-8 py-5 rounded-2xl shadow-2xl shadow-teal-500/50 hover:shadow-teal-500/70 transition-all hover:scale-110 flex items-center gap-4 group"
        >
          <div className="relative">
            <ShoppingBag className="w-7 h-7" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 text-teal-900 rounded-full flex items-center justify-center text-xs animate-pulse">
              {totalItems}
            </div>
          </div>
          <div className="text-left">
            <div className="text-xs text-teal-100">My Cart</div>
            <div className="text-lg">₹{cartTotal.toFixed(2)}</div>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <span className="text-2xl">→</span>
          </div>
        </button>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <ZeptoCart
          cart={cart}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
          onClose={() => setShowCart(false)}
          onCheckout={() => {
            setShowCart(false);
            setShowCheckout(true);
          }}
        />
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal
          cart={cart}
          onClose={() => setShowCheckout(false)}
          clearCart={clearCart}
        />
      )}

      {/* Footer */}
      <ZeptoFooter />
    </div>
  );
}