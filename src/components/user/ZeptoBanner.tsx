import { Zap, TrendingDown, Shield, Truck } from 'lucide-react';

export function ZeptoBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-600 to-emerald-600 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-teal-400/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl top-1/2 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 pb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
              <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <span>🌾 Fresh Stock Daily • Premium Quality</span>
            </div>

            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              Premium Quality
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-cyan-100 to-teal-100">
                Groceries
              </span>
            </h1>

            <p className="text-xl text-teal-50 mb-8 leading-relaxed">
              Get Rice, Dal, Pulses, Sugar &amp; more at the best prices
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                <TrendingDown className="w-8 h-8 text-emerald-300 mb-2" />
                <div className="text-2xl mb-1">Best Prices</div>
                <p className="text-sm text-teal-100">Wholesale rates</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                <Shield className="w-8 h-8 text-emerald-300 mb-2" />
                <div className="text-2xl mb-1">100% Quality</div>
                <p className="text-sm text-teal-100">Assured Products</p>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="hidden md:block relative h-96">
            {/* Floating Card 1 - Basmati Rice */}
            <div className="absolute top-0 right-0 bg-white rounded-2xl p-6 shadow-2xl w-72 animate-float border border-teal-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  🌾
                </div>
                <div className="flex-1">
                  <div className="text-gray-900 mb-1">Premium Basmati Rice</div>
                  <div className="text-sm text-gray-500">1 kg pack</div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <span className="text-3xl text-teal-600">₹150</span>
                  <span className="text-sm text-gray-400 line-through ml-2">₹180</span>
                </div>
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl text-sm shadow-md">✓ In Stock</span>
              </div>
            </div>

            {/* Floating Card 2 - Toor Dal */}
            <div className="absolute top-28 right-24 bg-white rounded-2xl p-6 shadow-2xl w-72 animate-float border border-teal-100" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-amber-400 to-amber-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  🥘
                </div>
                <div className="flex-1">
                  <div className="text-gray-900 mb-1">Toor Dal (Arhar)</div>
                  <div className="text-sm text-gray-500">1 kg pack</div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <span className="text-3xl text-teal-600">₹120</span>
                  <span className="text-sm text-gray-400 line-through ml-2">₹140</span>
                </div>
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl text-sm shadow-md animate-pulse">🔥 15% OFF</span>
              </div>
            </div>

            {/* Floating Card 3 - Delivery Services */}
            <div className="absolute bottom-16 left-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-2xl p-6 shadow-2xl w-80 animate-float border border-green-400" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-xl">
                  <Truck className="w-9 h-9 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl text-white mb-1">Delivery Services</div>
                  <div className="text-sm text-green-100">Available across Bengaluru</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto" viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 240L60 220C120 200 240 160 360 145C480 130 600 130 720 140C840 150 960 165 1080 175C1200 180 1320 180 1380 180L1440 180V240H1380C1320 240 1200 240 1080 240C960 240 840 240 720 240C600 240 480 240 360 240C240 240 120 240 60 240H0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}