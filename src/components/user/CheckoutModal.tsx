import { useState } from 'react';
import { X, User, Phone, MapPin, MessageCircle, PhoneCall } from 'lucide-react';
import type { CartItem } from '../../App';

type CheckoutModalProps = {
  cart: CartItem[];
  onClose: () => void;
  clearCart: () => void;
};

export function CheckoutModal({ cart, onClose, clearCart }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.basePrice * item.quantity,
    0
  );
  
  const gstAmount = cart.reduce(
    (sum, item) =>
      sum + (item.product.finalPrice - item.product.basePrice) * item.quantity,
    0
  );
  
  const total = cart.reduce(
    (sum, item) => sum + item.product.finalPrice * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format order message for WhatsApp
    let message = '🛒 *New Order from KR Traders*\n';
    message += '━━━━━━━━━━━━━━━━━━━━\n\n';
    message += '*Order Details:*\n\n';
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   ${item.quantity} ${item.product.unit} × ₹${item.product.finalPrice.toFixed(2)}\n`;
      message += `   Subtotal: ₹${(item.product.finalPrice * item.quantity).toFixed(2)}\n\n`;
    });
    
    message += '━━━━━━━━━━━━━━━━━━━━\n';
    message += `*Subtotal:* ₹${subtotal.toFixed(2)}\n`;
    message += `*GST:* ₹${gstAmount.toFixed(2)}\n`;
    message += `*Final Amount:* ₹${total.toFixed(2)}\n\n`;
    message += '━━━━━━━━━━━━━━━━━━━━\n\n';
    message += '*Customer Details:*\n';
    message += `👤 Name: ${formData.name}\n`;
    message += `📱 Phone: ${formData.phone}\n`;
    message += `📍 Address: ${formData.address}\n`;
    message += '━━━━━━━━━━━━━━━━━━━━';
    
    // WhatsApp business number - replace with actual number
    const phoneNumber = '919876543210'; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close modal
    clearCart();
    onClose();
  };

  const handleCallOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store order details in sessionStorage for reference during call
    const orderDetails = {
      cart: cart.map(item => ({
        name: item.product.name,
        quantity: item.quantity,
        unit: item.product.unit,
        price: item.product.finalPrice
      })),
      subtotal,
      gstAmount,
      total,
      customer: formData
    };
    
    sessionStorage.setItem('pendingOrder', JSON.stringify(orderDetails));
    
    // Phone number for call - replace with actual number
    const phoneNumber = '919876543210'; // Replace with your phone number
    
    // Create SMS with order details as backup
    let smsMessage = `KR Traders Order\n\n`;
    smsMessage += `Items: ${cart.map(item => `${item.product.name} (${item.quantity} ${item.product.unit})`).join(', ')}\n\n`;
    smsMessage += `Total: ₹${total.toFixed(2)}\n\n`;
    smsMessage += `Customer: ${formData.name}\n`;
    smsMessage += `Phone: ${formData.phone}\n`;
    smsMessage += `Address: ${formData.address}`;
    
    // First try to send SMS with details
    window.open(`sms:${phoneNumber}?body=${encodeURIComponent(smsMessage)}`, '_blank');
    
    // Then open phone dialer
    setTimeout(() => {
      window.open(`tel:${phoneNumber}`, '_self');
    }, 1000);
    
    // Clear cart and close modal
    clearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-700 text-white p-6 flex items-center justify-between rounded-t-2xl">
            <div>
              <h2 className="text-2xl mb-1">Checkout</h2>
              <p className="text-teal-100">Complete your order</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            {/* Order Summary */}
            <div className="mb-6">
              <h3 className="text-gray-900 mb-4">Order Summary</h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-900">{item.product.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} {item.product.unit} × ₹{item.product.finalPrice.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-teal-600">
                      ₹{(item.product.finalPrice * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-3 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>GST:</span>
                    <span>₹{gstAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl text-gray-900 pt-2 border-t border-gray-300">
                    <span>Total:</span>
                    <span className="text-teal-600">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Details Form */}
            <form onSubmit={handleSubmit}>
              <h3 className="text-gray-900 mb-4">Customer Details</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Delivery Address
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Enter your complete delivery address"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                {/* WhatsApp Button */}
                <button
                  type="submit"
                  className="py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>

                {/* Call Button */}
                <button
                  type="button"
                  onClick={handleCallOrder}
                  disabled={!formData.name || !formData.phone || !formData.address}
                  className="py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                Choose your preferred contact method to complete the order
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}