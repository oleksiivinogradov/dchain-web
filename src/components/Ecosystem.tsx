import { Network, Code, Users, Shield } from 'lucide-react';

export function Ecosystem() {
  const ecosystemItems = [
    {
      icon: Network,
      title: 'Infrastructure Layer',
      description: 'High-performance blockchain infrastructure designed for scalability and security.',
      gradient: 'from-orange-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'Comprehensive SDKs, APIs, and documentation to accelerate development.',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Community Governance',
      description: 'Democratic decision-making through decentralized governance mechanisms.',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Security Framework',
      description: 'Industry-leading security protocols and regular audits to ensure trust.',
      gradient: 'from-blue-500 to-orange-500',
    },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-[#0a0e27] text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500 to-pink-500 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-white mb-4">Ecosystem</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            A comprehensive ecosystem of tools, protocols, and communities working together
            to build the decentralized future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ecosystemItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card background with gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 group-hover:opacity-100 blur transition-opacity rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    backgroundImage: `linear-gradient(135deg, ${item.gradient.includes('orange') ? '#f97316' : item.gradient.includes('pink') ? '#ec4899' : item.gradient.includes('purple') ? '#a855f7' : '#3b82f6'}, ${item.gradient.includes('pink') && !item.gradient.includes('purple') ? '#ec4899' : item.gradient.includes('purple') && !item.gradient.includes('blue') ? '#a855f7' : item.gradient.includes('blue') && !item.gradient.includes('orange') ? '#3b82f6' : '#f97316'})`
                  }}
                ></div>

                {/* Card content */}
                <div className="relative bg-[#0f1535] p-8 rounded-lg h-full border border-white/5 group-hover:border-white/10 transition-all">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>

                  {/* Decorative corner element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-30 transition-opacity">
                    <div className={`w-full h-full bg-gradient-to-tl ${item.gradient} rounded-tl-full`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Join our thriving ecosystem and help shape the future of blockchain
          </p>
          <a 
            href="#developers" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all group/btn"
          >
            Explore Documentation
            <svg 
              className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
