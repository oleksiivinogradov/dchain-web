import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin } from 'lucide-react';
import oleksiiImage from 'figma:asset/91f0865d322b601ece4b8e907c5b04462763af93.png';
import eugeneImage from 'figma:asset/5dd864a86266c5641e5cefc46aab9022ead7c043.png';

export function Team() {
  const team = [
    {
      name: 'Oleksii Vinogradov',
      title: 'Founder',
      description: 'Serial entrepreneur and investor with 25+ years of experience. Founder of CFC, Heartln Inc, IXC Softswitch.',
      linkedin: 'https://www.linkedin.com/in/oleksiivinogradov/',
      image: oleksiiImage,
    },
    {
      name: 'Eugene Luzgin',
      title: 'CTO',
      description: 'Chief technology officer with track record in software industry roles ranging from contributor to a startup founder.',
      linkedin: 'https://www.linkedin.com/in/luzgin/',
      image: eugeneImage,
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-[#0f1535] to-[#0a0e27] relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="team-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="white" />
            <circle cx="0" cy="0" r="1" fill="white" />
            <circle cx="100" cy="0" r="1" fill="white" />
            <circle cx="0" cy="100" r="1" fill="white" />
            <circle cx="100" cy="100" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#team-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 text-orange-400 uppercase tracking-wider">
              Leadership
            </span>
          </div>
          <h2 className="text-white mb-6">
            Our Team
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Meet the visionaries building the future of decentralized blockchain
          </p>
        </div>

        {/* Team grid with alternating layout */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Profile Image Side */}
              <div className="flex-shrink-0 w-full md:w-1/2">
                <div className="relative group">
                  {/* Gradient glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 opacity-20 group-hover:opacity-30 blur-2xl transition-opacity"></div>
                  
                  {/* Image container */}
                  <div className="relative">
                    <div className="aspect-square max-w-md mx-auto overflow-hidden border-4 border-white/10 group-hover:border-orange-500/30 transition-all shadow-2xl">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-orange-500"></div>
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-pink-500"></div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 w-full md:w-1/2">
                <div className="space-y-6">
                  {/* Role badge */}
                  <div>
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white uppercase tracking-wider">
                      {member.title}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-white">
                    {member.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {member.description}
                  </p>

                  {/* Divider */}
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>

                  {/* LinkedIn Link */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors group/link border border-white/10 hover:border-orange-500/30 px-6 py-3"
                  >
                    <Linkedin size={20} />
                    <span>Connect on LinkedIn</span>
                    <svg 
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
