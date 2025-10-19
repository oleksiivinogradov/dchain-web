import { Twitter, Send, MessageCircle } from 'lucide-react';
import logo from 'figma:asset/6c6d78629c66e087b0f3252d91e26ffca4fdb3c7.png';

export function Footer() {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/dchain_hq',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: 'https://t.me/openbisea_en/41309',
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/8U3yYBkFEC',
    },
  ];

  return (
    <footer id="contact" className="bg-[#0a0e27] border-t border-orange-500/20 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={logo} alt="DChain" className="h-12 w-auto mb-4" />
            <p className="text-gray-300">
              Building the future of decentralized infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Foundation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#vision" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Vision & Mission
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://docs.openbisea.com/dchain/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/open?id=1-4F0t-pwzKK_P6ZElwoqmSLPwRT9BFlx&usp=drive_fs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 DCHAIN Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
