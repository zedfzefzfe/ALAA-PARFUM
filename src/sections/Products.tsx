import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Check, X } from 'lucide-react';
import { productsConfig } from '../config';
import type { Product } from '../config';

interface ProductsProps {
  onAddToCart: (product: Product, size: string) => void;
}

const sizeMultipliers: Record<string, number> = {
  '30ml': 1,
  '50ml': 1.5,
  '100ml': 2.5,
};

const Products = ({ onAddToCart }: ProductsProps) => {
  if (!productsConfig.heading && productsConfig.products.length === 0) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(productsConfig.categories[0] || 'All');
  const [addedItems, setAddedItems] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('50ml');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProducts = activeCategory === productsConfig.categories[0]
    ? productsConfig.products
    : productsConfig.products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: Product, size: string) => {
    onAddToCart(product, size);
    setAddedItems(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize('50ml');
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const getPriceForSize = (basePrice: number, size: string) => {
    return Math.round(basePrice * sizeMultipliers[size]);
  };

  return (
    <>
      <section
        id="products"
        ref={sectionRef}
        className="py-24 md:py-32 bg-[#0a0a0a]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
          {/* Header */}
          <div className="text-center mb-12">
            <span
              className={`inline-block mb-4 text-sm tracking-[0.3em] text-[#C9A84C] font-medium uppercase transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {productsConfig.tag}
            </span>
            <h2
              className={`font-serif text-4xl md:text-5xl text-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {productsConfig.heading}
            </h2>
            <p
              className={`max-w-2xl mx-auto text-gray-400 text-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {productsConfig.description}
            </p>
          </div>

          {/* Category Filter */}
          {productsConfig.categories.length > 0 && (
            <div
              className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {productsConfig.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 border ${
                    activeCategory === category
                      ? 'bg-[#C9A84C] text-black border-[#C9A84C]'
                      : 'bg-transparent text-gray-400 border-[#C9A84C]/30 hover:border-[#C9A84C] hover:text-[#C9A84C]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-[#111111] border border-[#C9A84C]/20 transition-all duration-700 hover:border-[#C9A84C]/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden bg-[#0a0a0a] cursor-pointer"
                  onClick={() => openProductModal(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-108"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest">
                      VIEW DETAILS
                    </span>
                  </div>

                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product, '50ml');
                    }}
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 flex items-center gap-2 text-sm tracking-wide transition-all duration-300 ${
                      addedItems.includes(product.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-[#C9A84C] text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'
                    }`}
                  >
                    {addedItems.includes(product.id) ? (
                      <>
                        <Check size={16} />
                        {productsConfig.addedToCartText}
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} />
                        {productsConfig.addToCartText}
                      </>
                    )}
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5 bg-[#111111]">
                  <span className="text-xs text-[#C9A84C]/70 tracking-wide uppercase">{product.category}</span>
                  <h3 className="font-serif text-xl text-white mt-1 group-hover:text-[#C9A84C] transition-colors">{product.name}</h3>
                  <p className="text-[#C9A84C] font-medium mt-2">From ${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          {productsConfig.viewAllText && (
            <div
              className={`text-center mt-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <button className="px-12 py-4 border-2 border-[#C9A84C] text-[#C9A84C] font-light tracking-widest text-sm hover:bg-[#C9A84C] hover:text-black transition-all duration-300">
                {productsConfig.viewAllText}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80"
            onClick={closeProductModal}
          />
          <div className="relative bg-[#111111] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#C9A84C]/30">
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-10 p-2 text-white hover:text-[#C9A84C] transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="h-[400px] md:h-full bg-[#0a0a0a]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Product Details */}
              <div className="p-8">
                <span className="text-xs text-[#C9A84C]/70 tracking-wide uppercase">{selectedProduct.category}</span>
                <h2 className="font-serif text-3xl text-white mt-2">{selectedProduct.name}</h2>
                <p className="text-gray-400 mt-4 leading-relaxed">{selectedProduct.description}</p>
                
                {/* Scent Notes */}
                <div className="mt-8 space-y-4">
                  {selectedProduct.topNotes && (
                    <div>
                      <h4 className="text-[#C9A84C] text-sm tracking-wide uppercase mb-2">Top Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.topNotes.map((note) => (
                          <span key={note} className="px-3 py-1 bg-[#0a0a0a] text-gray-300 text-sm border border-[#C9A84C]/20">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.heartNotes && (
                    <div>
                      <h4 className="text-[#C9A84C] text-sm tracking-wide uppercase mb-2">Heart Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.heartNotes.map((note) => (
                          <span key={note} className="px-3 py-1 bg-[#0a0a0a] text-gray-300 text-sm border border-[#C9A84C]/20">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.baseNotes && (
                    <div>
                      <h4 className="text-[#C9A84C] text-sm tracking-wide uppercase mb-2">Base Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.baseNotes.map((note) => (
                          <span key={note} className="px-3 py-1 bg-[#0a0a0a] text-gray-300 text-sm border border-[#C9A84C]/20">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Size Selector */}
                <div className="mt-8">
                  <h4 className="text-[#C9A84C] text-sm tracking-wide uppercase mb-3">Select Size</h4>
                  <div className="flex gap-3">
                    {['30ml', '50ml', '100ml'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-sm border transition-all ${
                          selectedSize === size
                            ? 'bg-[#C9A84C] text-black border-[#C9A84C]'
                            : 'bg-transparent text-gray-400 border-[#C9A84C]/30 hover:border-[#C9A84C]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price and Add to Cart */}
                <div className="mt-8 pt-6 border-t border-[#C9A84C]/20">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400">Price</span>
                    <span className="font-serif text-2xl text-[#C9A84C]">
                      ${getPriceForSize(selectedProduct.price, selectedSize).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleAddToCart(selectedProduct, selectedSize);
                      closeProductModal();
                    }}
                    className="w-full py-4 bg-[#C9A84C] text-black font-light tracking-widest btn-hover flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={18} />
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
