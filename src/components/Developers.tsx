import { BookOpen, Search, Droplet, Rocket } from 'lucide-react';

export function Developers() {
  const resources = [
    {
      title: 'White Paper',
      description: 'Dive deep into DChain\'s technical architecture, consensus mechanism, and vision for the future of blockchain.',
      icon: BookOpen,
      link: 'https://docs.openbisea.com/dchain/',
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Block Explorer',
      description: 'Explore transactions, blocks, and network activity on the DChain testnet in real-time.',
      icon: Search,
      link: 'https://dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io/',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Testnet Faucet',
      description: 'Get free testnet tokens to start building and testing your applications on DChain.',
      icon: Droplet,
      link: 'https://www.dchain.foundation/faucet',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Getting Started',
      description: 'Learn how to deploy your first smart contract and integrate with the DChain network.',
      icon: Rocket,
      link: 'https://docs.openbisea.com/dchain/developers-part/migrate-your-smart-contract',
      color: 'from-orange-500 to-pink-500',
    },
  ];

  return (
    <section id="developers" className="py-24 bg-[#0a0e27] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-xl transform rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 blur-xl transform rotate-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
            Developers
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale on DChain
          </p>
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0f1535] border border-blue-500/20 hover:border-blue-500/40 p-8 transition-all hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 transform relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 text-blue-400 group-hover:text-orange-500 transition-colors flex items-center gap-2">
                    <span>Learn more</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Decorative cubes */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 opacity-60 transform rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-gradient-to-br from-orange-500 to-pink-500 opacity-60 transform rotate-45 animate-pulse delay-300"></div>
      </div>
    </section>
  );
}
