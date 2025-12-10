import { useState } from 'react';
import { UserPortal } from './components/UserPortal';

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  basePrice: number;
  gstPercent: number;
  cgst: number;
  sgst: number;
  finalPrice: number;
  stock: number;
  unit: string;
  description?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};

function App() {
  const [products] = useState<Product[]>([
    // ============ RICE & GRAINS ============
    {
      id: '1',
      name: 'Premium Basmati Rice',
      category: 'Rice & Grains',
      image: 'https://www.indiagatefoods.com/wp-content/uploads/2022/02/IG-Ecom-banners-1000x1000pix_Select_5kg_4.jpg',
      basePrice: 120,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 126,
      stock: 100,
      unit: 'kg',
      description: 'Extra long grain aromatic basmati rice, aged for perfect flavor and fluffy texture'
    },
    {
      id: '2',
      name: 'Sona Masoori Rice',
      category: 'Rice & Grains',
      image: 'https://th.bing.com/th/id/OIP.rSKG4PAeGI_i0_jcFT55MQHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      basePrice: 75,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 78.75,
      stock: 120,
      unit: 'kg',
      description: 'Light and aromatic medium grain rice, perfect for everyday meals and biryanis'
    },
    {
      id: '3',
      name: 'Kolam Rice',
      category: 'Rice & Grains',
      image: 'https://images.unsplash.com/photo-1613045935265-265ff612e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXNtaW5lJTIwcmljZSUyMGdyYWluc3xlbnwxfHx8fDE3NjUyODI5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 68,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 71.4,
      stock: 110,
      unit: 'kg',
      description: 'Daily use rice variety, soft texture and easy to digest, ideal for all meals'
    },
    {
      id: '4',
      name: 'Brown Rice (Organic)',
      category: 'Rice & Grains',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800',
      basePrice: 95,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 99.75,
      stock: 60,
      unit: 'kg',
      description: 'Nutrient-rich whole grain rice, high in fiber and perfect for health-conscious families'
    },
    {
      id: '5',
      name: 'Whole Wheat Flour (Atta)',
      category: 'Rice & Grains',
      image: 'https://images.unsplash.com/photo-1714168526009-2d0d333640d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGdyYWluc3xlbnwxfHx8fDE3NjUyODI5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 45,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 47.25,
      stock: 200,
      unit: 'kg',
      description: 'Premium quality whole wheat flour, stone-ground for making soft rotis and parathas'
    },

    // ============ DAL & PULSES ============
    {
      id: '8',
      name: 'Moong Dal Green (Whole)',
      category: 'Dal & Pulses',
      image: 'https://th.bing.com/th/id/OIP.ntWN_-6WgPXtqDQq-iEDjwHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      basePrice: 110,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 115.5,
      stock: 90,
      unit: 'kg',
      description: 'Fresh green moong dal, highly nutritious and perfect for sprouts and curries'
    },
    {
      id: '9',
      name: 'Moong Dal Yellow (Split)',
      category: 'Dal & Pulses',
      image: 'https://th.bing.com/th/id/OIP.Rd360RGkP-TpSlt8z28bZwHaGU?w=221&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      basePrice: 105,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 110.25,
      stock: 100,
      unit: 'kg',
      description: 'Split yellow moong dal, easy to cook and digest, ideal for khichdi and soups'
    },
    {
      id: '12',
      name: 'Urad Dal White (Split)',
      category: 'Dal & Pulses',
      image: 'https://th.bing.com/th/id/OIP.2Gp22OZ11nL3cNMz3axkcwHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      basePrice: 105,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 110.25,
      stock: 85,
      unit: 'kg',
      description: 'Split black gram, essential for South Indian dishes like dosa and idli'
    },
    {
      id: '14',
      name: 'Rajma (Red Kidney Beans)',
      category: 'Dal & Pulses',
      image: 'https://th.bing.com/th/id/OIP.uAc6YtF6IqNgCJDFwgw4mAHaEP?w=279&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      basePrice: 130,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 136.5,
      stock: 75,
      unit: 'kg',
      description: 'Premium red kidney beans, protein-rich and perfect for rajma curry'
    },

    // ============ SUGAR & SALT ============
    {
      id: '17',
      name: 'White Sugar (Refined)',
      category: 'Sugar & Salt',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/GR/OI/NT/10597567/s30-refined-white-sugar-1000x1000.jpg',
      basePrice: 42,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 44.1,
      stock: 200,
      unit: 'kg',
      description: 'Pure white refined sugar, crystal clear sweetness for everyday use'
    },
    {
      id: '18',
      name: 'Brown Sugar',
      category: 'Sugar & Salt',
      image: 'https://th.bing.com/th/id/OIP.Zw7t7kpf8h2ZNRxNnjHLVwHaFP?w=232&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
      basePrice: 65,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 68.25,
      stock: 100,
      unit: 'kg',
      description: 'Natural brown sugar with rich molasses flavor, perfect for baking and beverages'
    },
    {
      id: '19',
      name: 'Jaggery (Gur Blocks)',
      category: 'Sugar & Salt',
      image: 'https://tse1.mm.bing.net/th/id/OIP.aOUL0K51evPw-MYt5uKEcgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
      basePrice: 60,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 63,
      stock: 110,
      unit: 'kg',
      description: 'Pure organic jaggery blocks, unrefined and packed with natural minerals and iron'
    },
    {
      id: '20',
      name: 'Rock Salt',
      category: 'Sugar & Salt',
      image: 'https://calbizjournal.com/wp-content/uploads/2022/03/rock-salt.jpg',
      basePrice: 80,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 84,
      stock: 60,
      unit: 'kg',
      description: 'Pure Himalayan pink rock salt, rich in minerals and perfect for cooking and health'
    },
    {
      id: '21',
      name: 'Iodized Salt (Table Salt)',
      category: 'Sugar & Salt',
      image: 'https://images.unsplash.com/photo-1760516476065-8497f8bc286f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMHNhbHQlMjByZWZpbmVkfGVufDF8fHx8MTc2NTI4MjkzN3ww&ixlib=rb-4.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 22,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 23.1,
      stock: 250,
      unit: 'kg',
      description: 'Premium iodized table salt, essential for daily cooking and health'
    },

    // ============ COOKING OIL ============
    {
      id: '23',
      name: 'Sunflower Oil',
      category: 'Cooking Oil',
      image: 'https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWx8ZW58MXx8fHwxNzY1MjgyOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 140,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 147,
      stock: 100,
      unit: 'litre',
      description: 'Pure sunflower oil, light and heart-healthy, perfect for all types of cooking'
    },
    {
      id: '24',
      name: 'Mustard Oil (Kachi Ghani)',
      category: 'Cooking Oil',
      image: 'https://tse2.mm.bing.net/th/id/OIP.p6Ui22d1Tm_O9Tx1a6jFWwHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3',
      basePrice: 155,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 162.75,
      stock: 80,
      unit: 'litre',
      description: 'Traditional cold-pressed mustard oil, authentic flavor for pickles and cooking'
    },
    {
      id: '25',
      name: 'Olive Oil (Extra Virgin)',
      category: 'Cooking Oil',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMG9pbCUyMGJvdHRsZXxlbnwxfHx8fDE3NjUxOTEzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 450,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 472.5,
      stock: 40,
      unit: 'litre',
      description: 'Premium extra virgin olive oil, rich in antioxidants, ideal for salads and cooking'
    },
    {
      id: '26',
      name: 'Coconut Oil (Cold Pressed)',
      category: 'Cooking Oil',
      image: 'https://images.unsplash.com/photo-1588413333412-82148535db53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwb2lsfGVufDF8fHx8MTc2NTI4MjkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 180,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 189,
      stock: 70,
      unit: 'litre',
      description: 'Pure cold-pressed coconut oil, versatile for cooking and hair care'
    },
    {
      id: '27',
      name: 'Groundnut Oil (Peanut)',
      category: 'Cooking Oil',
      image: 'https://m.media-amazon.com/images/I/61E1vL0aZ-L._SL1280_.jpg',
      basePrice: 150,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 157.5,
      stock: 90,
      unit: 'litre',
      description: 'Pure groundnut oil with nutty flavor, excellent for deep frying and cooking'
    },

    // ============ SPICES ============
    {
      id: '28',
      name: 'Turmeric Powder (Haldi)',
      category: 'Spices',
      image: 'https://images.unsplash.com/photo-1698556735172-1b5b3cd9d2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMHBvd2RlciUyMHNwaWNlfGVufDF8fHx8MTc2NTI4MjkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 180,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 189,
      stock: 120,
      unit: 'kg',
      description: 'Pure turmeric powder, rich in curcumin with anti-inflammatory properties'
    },
    {
      id: '29',
      name: 'Red Chili Powder (Lal Mirch)',
      category: 'Spices',
      image: 'https://th.bing.com/th/id/OIP.CaXAp_Dx_gid8GsVacA3mwHaE8?w=270&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      basePrice: 220,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 231,
      stock: 100,
      unit: 'kg',
      description: 'Premium red chili powder, adds perfect heat and color to your dishes'
    },
    {
      id: '30',
      name: 'Coriander Powder (Dhania)',
      category: 'Spices',
      image: 'https://images.unsplash.com/photo-1633881614907-8587c9b93c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JpYW5kZXIlMjBwb3dkZXJ8ZW58MXx8fHwxNzY1MjgyOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 160,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 168,
      stock: 110,
      unit: 'kg',
      description: 'Freshly ground coriander powder, aromatic and essential for Indian curries'
    },
    {
      id: '31',
      name: 'Cumin Seeds (Jeera)',
      category: 'Spices',
      image: 'https://images.unsplash.com/photo-1600791102844-208e695205f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdW1pbiUyMHNlZWRzJTIwc3BpY2V8ZW58MXx8fHwxNzY1MTc1MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 280,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 294,
      stock: 80,
      unit: 'kg',
      description: 'Premium cumin seeds, aromatic spice for tempering and seasoning'
    },
    {
      id: '32',
      name: 'Garam Masala',
      category: 'Spices',
      image: 'https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJhbSUyMG1hc2FsYXxlbnwxfHx8fDE3NjUyODI5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      basePrice: 320,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 336,
      stock: 90,
      unit: 'kg',
      description: 'Authentic garam masala blend, perfect finishing spice for all Indian dishes'
    },
    {
      id: '33',
      name: 'Black Pepper (Kali Mirch)',
      category: 'Spices',
      image: 'https://tse2.mm.bing.net/th/id/OIP.7UCnSEWTx-g9g8ZdQTCWRAHaE9?rs=1&pid=ImgDetMain&o=7&rm=3',
      basePrice: 450,
      gstPercent: 5,
      cgst: 2.5,
      sgst: 2.5,
      finalPrice: 472.5,
      stock: 60,
      unit: 'kg',
      description: 'Whole black peppercorns, the king of spices with bold flavor and health benefits'
    }
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);

  const categories: Category[] = [
    { id: '1', name: 'All', icon: 'grid' },
    { id: '2', name: 'Rice & Grains', icon: 'wheat' },
    { id: '3', name: 'Dal & Pulses', icon: 'circle' },
    { id: '4', name: 'Cooking Oil', icon: 'droplet' },
    { id: '5', name: 'Sugar & Salt', icon: 'candy' },
    { id: '6', name: 'Spices', icon: 'pepper' }
  ];

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.product.id !== productId));
    } else {
      setCart(prev =>
        prev.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <UserPortal
        products={products}
        categories={categories}
        cart={cart}
        addToCart={addToCart}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}

export default App;