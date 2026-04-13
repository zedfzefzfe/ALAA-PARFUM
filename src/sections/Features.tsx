import { useEffect, useRef, useState } from 'react';
import { Truck, ShieldCheck, Leaf, Heart, Sparkles, Gift } from 'lucide-react';
import { featuresConfig } from '../config';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Truck,
  ShieldCheck,
  Leaf,
  Heart,
  Sparkles,
  Gift,
};

const Features = () => {
  if (featuresConfig.features.length === 0) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-[150px] bg-[#111111] relative"
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {featuresConfig.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className={`p-8 lg:p-[50px] border-b md:border-b-0 md:border-r border-[#C9A84C]/20 last:border-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {IconComponent && (
                  <IconComponent
                    size={36}
                    strokeWidth={1.2}
                    className="text-[#C9A84C] mb-6"
                  />
                )}
                <h3 className="font-serif text-2xl lg:text-[32px] text-white mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
    </section>
  );
};

export default Features;
