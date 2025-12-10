import { useRef } from 'react';
import type { Category } from '../../App';
import { Grid, Wheat, Circle, Droplet, Candy, Flame } from 'lucide-react';

type ZeptoCategoriesProps = {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const iconMap: Record<string, any> = {
  grid: Grid,
  wheat: Wheat,
  circle: Circle,
  droplet: Droplet,
  candy: Candy,
  pepper: Flame
};

const colorMap: Record<string, string> = {
  All: 'from-teal-600 to-cyan-700',
  'Rice & Grains': 'from-amber-500 to-orange-600',
  'Dal & Pulses': 'from-green-500 to-emerald-600',
  'Cooking Oil': 'from-cyan-500 to-teal-600',
  'Sugar & Salt': 'from-pink-500 to-rose-600',
  'Spices': 'from-red-500 to-orange-600'
};

export function ZeptoCategories({
  categories,
  selectedCategory,
  onSelectCategory
}: ZeptoCategoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map(category => {
            const isSelected = selectedCategory === category.name;
            const Icon = iconMap[category.icon];
            const gradient = colorMap[category.name] || 'from-purple-500 to-violet-600';
            
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.name)}
                className={`flex-shrink-0 group relative transition-all ${
                  isSelected ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                {/* Glow effect for selected */}
                {isSelected && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30 blur-xl rounded-2xl animate-pulse`} />
                )}
                
                <div className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all shadow-lg ${
                  isSelected
                    ? `bg-gradient-to-r ${gradient} text-white shadow-xl`
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl'
                }`}>
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isSelected 
                      ? 'bg-white/20 shadow-lg' 
                      : `bg-gradient-to-br ${gradient} shadow-md`
                  }`}>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-white'}`} />
                  </div>
                  
                  {/* Text */}
                  <span className="text-sm pr-2">{category.name}</span>
                  
                  {/* Checkmark */}
                  {isSelected && (
                    <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}