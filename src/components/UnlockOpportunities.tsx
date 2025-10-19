import { TrendingUp, Droplet, Coins, Store } from 'lucide-react';

export function UnlockOpportunities() {
  const opportunities = [
    {
      icon: TrendingUp,
      title: 'Go-to-market strategy',
      description: 'Our expert team elevates your project to top rankings in the ratings of blockchain projects worldwide and empowering project growth.',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      icon: Droplet,
      title: 'Unique liquidity system',
      description: 'The network commission constantly boost Dtoken liquidity, ensuring its constant growth through smart contract rules.',
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      icon: Coins,
      title: 'Low transactions fees',
      description: 'On our chain fixed transaction fee of 0.000000888 ETH ($0.003). You always know what fee will be charged on chain.',
      gradient: 'from-indigo-600 to-blue-600',
    },
    {
      icon: Store,
      title: 'Own market for projects',
      description: 'We are launching our own market outside of stores where projects can be posted. Especially for crypto and blockchain projects.',
      gradient: 'from-orange-500 to-pink-500',
    },
  ];

  return (
    <section className="py-24 bg-[#0f1535] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 blur-xl transform rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-xl transform -rotate-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            UNLOCK YOUR OPPORTUNITIES
          </h2>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            DChain
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#0a0e27] border border-blue-500/20 hover:border-blue-500/40 p-8 transition-all hover:transform hover:scale-105"
              >
                {/* Roman numeral indicator */}
                <div className="absolute top-4 right-4 text-blue-500/30 group-hover:text-blue-500/50 transition-colors">
                  {['I', 'II', 'III', 'I'][index]}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${opportunity.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {opportunity.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {opportunity.description}
                </p>

                {/* Hover gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${opportunity.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
