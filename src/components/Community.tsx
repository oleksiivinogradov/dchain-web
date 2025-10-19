import { Twitter, Send, MessageCircle } from 'lucide-react';

export function Community() {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/dchain_hq',
      description: 'Follow us for the latest updates, announcements, and community highlights.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: 'https://t.me/openbisea_en/41309',
      description: 'Join our Telegram channel for real-time discussions and community support.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/8U3yYBkFEC',
      description: 'Connect with developers and enthusiasts in our active Discord community.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="community" className="py-24 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Join Our Community</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Connect with developers, researchers, and enthusiasts building the future
            of decentralized technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-[#0f1535] hover:bg-[#151b42] transition-all border border-orange-500/20 hover:border-orange-500 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-white mb-3">{social.name}</h3>
                <p className="text-gray-300">{social.description}</p>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center hover:scale-110 transition-transform`}
                  aria-label={social.name}
                >
                  <Icon className="text-white" size={20} />
                </a>
              );
            })}
          </div>
          <p className="text-gray-400">Follow us on social media to stay connected</p>
        </div>
      </div>
    </section>
  );
}
