import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e27]">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1845] to-[#0a0e27]"></div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Logo Text */}
        <div className="mb-12">
          <h1 className="text-7xl md:text-8xl lg:text-9xl mb-8 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent inline-block">
            DChain
          </h1>
        </div>

        {/* Main Description */}
        <div className="space-y-4 mb-16">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white">
            Blockchain for{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              games
            </span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-white">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              AI projects
            </span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-white">
            and{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              game studios
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transition-all inline-flex items-center gap-2"
          >
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            Get Started
          </a>
          <a
            href="#ecosystem"
            className="px-8 py-4 bg-transparent text-white border-2 border-orange-500 hover:bg-orange-500/10 transition-all inline-block"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="text-orange-500 animate-bounce" size={32} />
      </div>
    </section>
  );
}
