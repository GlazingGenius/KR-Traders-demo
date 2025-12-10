import { Search, MapPin, ChevronDown, User, Zap, ShoppingBag } from 'lucide-react';

type ZeptoHeaderProps = {
  cartCount?: number;
  onCartClick?: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export function ZeptoHeader({ cartCount = 0, onCartClick, searchQuery, onSearchChange }: ZeptoHeaderProps) {
  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Gradient Teal */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -top-32 -left-32 animate-pulse" />
          <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -top-32 -right-32 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-3 relative">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-white/30">
                <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-sm">Premium Quality Products</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="hidden sm:flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-teal-100">📍 Bengaluru, Karnataka</span>
              </div>
              <div className="bg-amber-400 text-teal-900 px-4 py-2 rounded-full animate-pulse">
                🎉 Best Prices Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-xl shadow-teal-500/50 group-hover:shadow-2xl group-hover:shadow-teal-500/70 transition-all group-hover:scale-110 rotate-3 group-hover:rotate-6">
                  <span className="text-2xl">🌾</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-700">
                  KR Traders
                </h1>
                <p className="text-xs text-gray-600">
                  Groceries
                </p>
              </div>
            </div>

            {/* Location Selector */}
            <button className="flex items-center gap-2 px-4 py-3 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl hover:from-teal-100 hover:to-cyan-100 transition-all border-2 border-teal-200 hover:border-teal-300 shadow-sm hover:shadow-md">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs text-teal-600">Deliver to</p>
                <p className="text-sm text-gray-900 flex items-center gap-1">
                  Home <ChevronDown className="w-4 h-4" />
                </p>
              </div>
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <input
                  type="text"
                  placeholder='Search for "rice", "dal", "sugar"...'
                  className="w-full pl-16 pr-4 py-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/30 focus:bg-white transition-all border-2 border-transparent focus:border-teal-300 shadow-sm hover:shadow-md text-gray-900 placeholder:text-gray-500"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </div>

            {/* User Icon */}
            <button className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-xl hover:from-teal-700 hover:to-cyan-800 transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110">
              <User className="w-6 h-6 text-white" />
            </button>

            {/* Shopping Bag Icon */}
            <button
              className="relative w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-xl hover:from-teal-700 hover:to-cyan-800 transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110"
              onClick={onCartClick}
            >
              <ShoppingBag className="w-6 h-6 text-white" />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 text-teal-900 rounded-full flex items-center justify-center text-xs animate-pulse">
                  {cartCount}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}