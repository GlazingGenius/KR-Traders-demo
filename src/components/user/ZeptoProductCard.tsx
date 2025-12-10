import { useState } from 'react';
import { Plus, Minus, Sparkles, Star, Clock, MessageCircle, PhoneCall } from 'lucide-react';
import type { Product } from '../../App';

type ZeptoProductCardProps = {
  product: Product;
  cartQuantity: number;
  addToCart: (product: Product, quantity: number) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
};

export function ZeptoProductCard({ product, cartQuantity, addToCart, updateCartQuantity }: ZeptoProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleAdd = () => {
    addToCart(product, 1);
  };

  const handleIncrement = () => {
    updateCartQuantity(product.id, cartQuantity + 1);
  };

  const handleDecrement = () => {
    updateCartQuantity(product.id, cartQuantity - 1);
  };

  const discount = Math.floor(Math.random() * 15) + 5;
  const rating = (4.0 + Math.random()).toFixed(1);
  const reviews = Math.floor(Math.random() * 500) + 100;

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in:\n\n📦 *${product.name}*\n💰 Price: ₹${product.finalPrice.toFixed(2)} per ${product.unit}\n\nCan you provide more details?`;
    const phoneNumber = '919876543210'; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallInquiry = () => {
    const phoneNumber = '919876543210'; // Replace with your phone number
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group relative">
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-cyan-500/0 to-emerald-500/0 group-hover:from-teal-500/5 group-hover:via-cyan-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all pointer-events-none" />
      
      {/* Product Image */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-square overflow-hidden">
        <div className={`w-full h-full ${!imageLoaded ? 'bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse' : ''}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} group-hover:scale-110`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Timer Badge */}
        <div className="absolute top-2 left-2 bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 backdrop-blur-sm">
          <span className="text-xs">✅ In Stock</span>
        </div>

        {/* Discount Badge */}
        {discount > 10 && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white px-3 py-1.5 rounded-lg shadow-xl animate-pulse">
            <div className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs">{discount}% OFF</span>
            </div>
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-xs text-gray-900">{rating}</span>
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1 relative">
        {/* Product Name */}
        <h3 className="text-sm text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem] group-hover:text-teal-700 transition-colors">
          {product.name}
        </h3>

        {/* Unit */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-3 py-1 rounded-full text-xs border border-teal-200">
            1 {product.unit}
          </span>
          {product.stock < 20 && (
            <span className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-3 py-1 rounded-full text-xs border border-red-200 flex items-center gap-1 animate-pulse">
              🔥 Only {product.stock} left
            </span>
          )}
        </div>

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mb-4 mt-auto">
          <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-700">
            ₹{product.finalPrice.toFixed(0)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₹{(product.finalPrice * 1.15).toFixed(0)}
          </span>
        </div>

        {/* Add to Cart Button */}
        {cartQuantity === 0 ? (
          <button
            onClick={handleAdd}
            className="w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 hover:from-teal-700 hover:via-cyan-700 hover:to-teal-800 text-white py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-teal-500/50 group-hover:scale-105"
          >
            <span>ADD</span>
            <Plus className="w-5 h-5" />
          </button>
        ) : (
          <div className="w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white rounded-xl flex items-center justify-between px-4 py-3 shadow-lg shadow-teal-500/50">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="text-lg">{cartQuantity}</span>
            <button
              onClick={handleIncrement}
              disabled={cartQuantity >= product.stock}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Inquiry Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button
            onClick={handleWhatsAppInquiry}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 text-sm shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={handleCallInquiry}
            className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white px-3 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 text-sm shadow-md hover:shadow-lg"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}