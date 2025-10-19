import { Sparkles, Gift, Calendar, Zap, Clock, Shield } from 'lucide-react';

export function DTree() {
  const benefits = [
    {
      number: '1',
      title: 'Early Access',
      icon: Zap,
      color: 'from-blue-500 to-purple-500',
    },
    {
      number: '2',
      title: 'Limited Supply',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      number: '3',
      title: 'Special Privileges',
      icon: Sparkles,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      number: '4',
      title: 'Special events',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '5',
      title: 'Exclusive airdrops',
      icon: Gift,
      color: 'from-orange-500 to-pink-500',
    },
    {
      number: '6',
      title: 'Limited-time offers',
      icon: Clock,
      color: 'from-pink-500 to-orange-500',
    },
  ];

  return (
    <section className="py-24 bg-[#0a0e27] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-xl transform rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 blur-xl transform rotate-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
            D-Tree
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            This unique NFT provides holders with early access to Dtoken upcoming token
            offerings before they become publicly available.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Decorative cubes */}
          <div className="absolute -top-12 left-0 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 opacity-60 transform rotate-12 animate-pulse"></div>
          <div className="absolute -bottom-12 right-0 w-28 h-28 bg-gradient-to-br from-orange-500 to-pink-500 opacity-60 transform rotate-45 animate-pulse delay-300"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-[#0f1535] hover:bg-[#151b42] transition-all border border-blue-500/20 hover:border-blue-500/40 group relative overflow-hidden"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-white text-xl">{benefit.number}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-blue-400" size={18} />
                    <h3 className="text-white">{benefit.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://app.galxe.com/quest/dexgo/GCt9Ltv4T9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Get NFT
          </a>
        </div>
      </div>
    </section>
  );
}
