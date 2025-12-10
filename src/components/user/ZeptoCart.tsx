import { X, Plus, Minus, Trash2, Clock, Tag, Gift } from 'lucide-react';
import type { CartItem } from '../../App';

type ZeptoCartProps = {
  cart: CartItem[];
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  onClose: () => void;
  onCheckout: () => void;
};

export function ZeptoCart({
  cart,
  updateCartQuantity,
  removeFromCart,
  onClose,
  onCheckout
}: ZeptoCartProps) {
  const subtotal = cart.reduce((sum, item) => sum + (item.product.finalPrice * item.quantity), 0);
  const deliveryFee = subtotal > 500 ? 0 : 30;
  const discount = subtotal > 500 ? subtotal * 0.05 : 0;
  const total = subtotal + deliveryFee - discount;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-gradient-to-br from-white to-teal-50/30 z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white px-6 py-6 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -top-32 -left-32 animate-pulse" />
            <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -top-32 -right-32 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="flex items-center justify-between relative">
            <div>
              <h2 className="text-2xl mb-1">My Cart</h2>
              <p className="text-sm text-teal-100 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Delivery available nearby locations
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                <span className="text-6xl">🛒</span>
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500">Add items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div
                  key={item.product.id}
                  className="flex gap-4 bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-teal-200"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex-shrink-0 border-2 border-gray-200 shadow-md">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm text-gray-900 mb-1.5 line-clamp-2">
                      {item.product.name}
                    </h3>
                    <p className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-2 py-1 rounded-lg text-xs inline-block mb-3 border border-teal-200">
                      1 {item.product.unit}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-700">
                          ₹{(item.product.finalPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white rounded-xl shadow-lg shadow-teal-500/50">
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                            className="w-9 h-9 flex items-center justify-center hover:bg-white/20 transition-colors rounded-l-xl"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                            disabled={item.quantity >= item.product.stock}
                            className="w-9 h-9 flex items-center justify-center hover:bg-white/20 transition-colors rounded-r-xl disabled:opacity-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2.5 text-red-500 bg-red-50 hover:bg-red-100 rounded-xl transition-colors shadow-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bill Details */}
        {cart.length > 0 && (
          <>
            <div className="px-6 py-5 border-t-2 border-gray-200 bg-gradient-to-br from-teal-50 to-cyan-50">
              <h3 className="text-sm text-gray-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-teal-600" />
                <span className="text-lg">Bill Details</span>
              </h3>
              <div className="space-y-3 text-sm bg-white p-4 rounded-xl border-2 border-teal-100 shadow-md">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  {deliveryFee === 0 ? (
                    <span className="text-green-600 flex items-center gap-1">
                      FREE 🎉
                    </span>
                  ) : (
                    <span className="text-gray-900">₹{deliveryFee.toFixed(2)}</span>
                  )}
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span className="flex items-center gap-1">
                      <Gift className="w-4 h-4" />
                      Discount (5%)
                    </span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between pt-3 border-t-2 border-teal-200">
                  <span className="text-gray-900">Grand Total</span>
                  <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-700">
                    ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>
              {subtotal < 1000 && (
                <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-4 shadow-md">
                  <p className="text-sm text-amber-800 flex items-center gap-2">
                    <span className="text-2xl">🎁</span>
                    <span>Add items worth <span className="text-lg text-amber-900">₹{(1000 - subtotal).toFixed(2)}</span> more for FREE delivery</span>
                  </p>
                </div>
              )}
            </div>

            {/* Checkout Button */}
            <div className="px-6 py-5 bg-white border-t-2 border-gray-200">
              <button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 hover:from-teal-700 hover:via-cyan-700 hover:to-teal-800 text-white py-5 rounded-2xl transition-all shadow-2xl shadow-teal-500/50 hover:shadow-teal-500/70 hover:scale-105 text-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}