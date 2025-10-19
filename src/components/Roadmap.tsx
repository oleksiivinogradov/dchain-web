import { Calendar, Rocket, Shield, Network, Boxes } from 'lucide-react';

export function Roadmap() {
  const milestones = [
    {
      quarter: 'Q1 2024',
      title: 'Foundation & Documentation',
      description: 'Develop project documentation and vision, initiating infrastructure development',
      icon: Rocket,
      color: 'from-blue-500 to-purple-500',
    },
    {
      quarter: 'Q2 2024',
      title: 'Security Chain & Token Launch',
      description: 'Security Chain launches and Token Generation Event for DTOKEN, entering the market',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      quarter: 'Q2 2024',
      title: 'Testnet Launch',
      description: 'Launch DChain Testnet, inviting projects for deployment on our network',
      icon: Network,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      quarter: 'Q3 2024',
      title: 'MAINNET Phase 1',
      description: 'Phase 1 of MAINNET rollout, fostering active partnerships & marketing campaigns',
      icon: Boxes,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      quarter: 'Q1 2025',
      title: 'Ecosystem Expansion',
      description: 'Expand DApp offerings and ecosystem, and launch of MAINNET Phase 2',
      icon: Calendar,
      color: 'from-orange-500 to-pink-500',
    },
  ];

  return (
    <section className="py-24 bg-[#0f1535] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-xl transform rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 blur-xl transform rotate-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
            Roadmap
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Our journey to build the future of blockchain infrastructure
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-[#0a0e27] border border-blue-500/20 hover:border-blue-500/40 p-6 transition-all group hover:shadow-lg hover:shadow-blue-500/10">
                      {/* Quarter badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`px-4 py-2 bg-gradient-to-r ${milestone.color} text-white`}>
                          {milestone.quarter}
                        </div>
                        <div className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center my-4 md:my-0">
                    <div className={`w-6 h-6 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-[#0f1535] shadow-lg`}></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>

          {/* Decorative cubes */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 opacity-60 transform rotate-12 animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 opacity-60 transform rotate-45 animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
}
