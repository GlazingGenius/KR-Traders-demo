import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

export function ZeptoFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 bg-teal-500 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-64 h-64 bg-emerald-500 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl">🌾</span>
              </div>
              <div>
                <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                  KR Traders
                </h3>
                <p className="text-xs text-teal-300">Groceries in minutes</p>
              </div>
            </div>
            <p className="text-teal-200 mb-6 leading-relaxed">
              Your trusted partner for fresh groceries delivered in 10-15 minutes. Quality guaranteed!
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-6 text-teal-100">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Products', 'How It Works', 'Delivery Areas', 'FAQs', 'Blog'].map(link => (
                <li key={link}>
                  <a href="#" className="text-teal-300 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full group-hover:bg-white transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl mb-6 text-teal-100">Categories</h4>
            <ul className="space-y-3">
              {['Rice & Grains', 'Dal & Pulses', 'Sugar & Salt', 'Cooking Oil', 'Spices', 'All Products'].map(category => (
                <li key={category}>
                  <a href="#" className="text-teal-300 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full group-hover:bg-white transition-colors" />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-6 text-teal-100">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-start gap-3 text-teal-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-teal-600/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm">123 Main Street,</p>
                    <p className="text-sm">Bengaluru, Karnataka</p>
                    <p className="text-sm">560001</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-teal-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-teal-600/50 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@krtraders.com" className="flex items-center gap-3 text-teal-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-teal-600/50 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@krtraders.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-teal-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-teal-600">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-teal-600">•</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <span className="text-teal-600">•</span>
            <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
          </div>
          <div className="text-sm text-teal-300 flex items-center gap-1">
            © {currentYear} KR Traders. Made with 
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" /> 
            in India
          </div>
        </div>

        {/* Payment & Delivery Badges */}
        <div className="mt-8 pt-8 border-t border-teal-700/50">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-2xl">🌾</span>
              <span className="text-sm text-teal-200">Fresh Stock</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-sm text-teal-200">5 Star Rated</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-sm text-teal-200">Best Quality</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <span className="text-sm text-teal-200">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}