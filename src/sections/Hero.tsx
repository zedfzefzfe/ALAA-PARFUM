import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { heroConfig } from '../config';

const Hero = () => {
  if (!heroConfig.title) return null;

  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#subhero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleLines = heroConfig.title.split('\n');

  return (
    <>
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${heroConfig.backgroundImage})`,
        }}
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 hero-overlay" />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      {/* Content - Left Aligned Layout */}
      <div className="relative z-10 h-full w-full flex items-center hero-container">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 hero-text">
          {/* Content wrapper */}
          <div className="relative z-10 max-w-2xl w-full">
            {/* Tagline */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#C9A84C] to-transparent" />
                <span className="text-xs md:text-sm tracking-[0.3em] font-light uppercase text-[#C9A84C]">
                  {heroConfig.tagline}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1
              className={`font-serif text-5xl md:text-6xl lg:text-7xl leading-tight transition-all duration-1000 mb-4 text-white ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              } hero-title`}
              style={{ transitionDelay: '400ms' }}
            >
              {titleLines.map((line, i) => (
                <span key={i} className={i === 0 ? 'gold-gradient-text' : 'text-white'}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-sm md:text-base font-light italic text-white/90 mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              } hero-subtitle`}
              style={{ transitionDelay: '1000ms' }}
            >
              Chaque goutte raconte une histoire d'élégance et de raffinement
            </p>

            {/* Decorative line */}
            <div
              className={`w-16 h-[2px] bg-gradient-to-r from-[#C9A84C] to-transparent mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transitionDelay: '1100ms', transformOrigin: 'left' }}
            />

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              } hero-buttons`}
              style={{ transitionDelay: '1200ms' }}
            >
              {heroConfig.ctaPrimaryText && (
                <a
                  href={heroConfig.ctaPrimaryTarget}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(heroConfig.ctaPrimaryTarget)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group min-w-[240px] w-full px-8 py-4 bg-[#C9A84C] text-black font-light tracking-wider text-sm uppercase relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/40 hover:-translate-y-1 whitespace-nowrap"
                >
                  <span className="relative z-10">{heroConfig.ctaPrimaryText}</span>
                  <div className="absolute inset-0 bg-white/20 -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              )}
              {heroConfig.ctaSecondaryText && (
                <a
                  href={heroConfig.ctaSecondaryTarget}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(heroConfig.ctaSecondaryTarget)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group min-w-[240px] w-full px-8 py-4 border-2 border-[#C9A84C] text-[#C9A84C] font-light tracking-wider text-sm uppercase relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/30 hover:-translate-y-1 whitespace-nowrap"
                >
                  <span className="relative z-10">{heroConfig.ctaSecondaryText}</span>
                  <div className="absolute inset-0 bg-[#C9A84C] -translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                  <div className="absolute inset-0 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span>{heroConfig.ctaSecondaryText}</span>
                  </div>
                </a>
              )}
            </div>

            {/* Stats Bar */}
            <div
              className={`mt-8 text-center transition-all duration-1000 hero-stats ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '1300ms' }}
            >
              <p className="text-sm font-light uppercase tracking-wider text-[#C9A84C]">
                ✦ 100% Pure &nbsp;|&nbsp; Fait Main &nbsp;|&nbsp; Livraison Maroc ✦
              </p>
            </div>
          </div>          </div>
        {/* Right side - Empty space for visual balance */}
        <div className="hidden lg:block w-1/2 h-full" />
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-8 left-8 lg:left-1/4 text-[#C9A84C] animate-bounce transition-opacity duration-1000 ${
          isVisible ? 'opacity-70' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </button>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
    </section>

    <style>{`
      @media (max-width: 768px) {
        .hero-container {
          flex-direction: column;
          min-height: 100svh;
          padding: 140px 24px 60px;
          text-align: center;
          align-items: center;
        }
        .hero-text {
          text-align: center;
          align-items: center;
        }
        .hero-title {
          font-size: clamp(2rem, 9vw, 2.8rem);
        }
        .hero-subtitle {
          text-decoration: none;
          background: none;
          -webkit-text-fill-color: white;
        }
        .hero-buttons {
          flex-direction: column;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
        }
        .hero-stats {
          white-space: normal;
          text-align: center;
        }
        .parallax-bg {
          background-size: cover;
          background-position: center center;
        }
        .hero-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%);
        }
      }
    `}</style>
    </>
  );
};

export default Hero;
