import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/6c6d78629c66e087b0f3252d91e26ffca4fdb3c7.png';

interface NavigationProps {
  currentPage: 'home' | 'grants';
  onNavigate: (page: 'home' | 'grants') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'grants', hash?: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    if (hash && page === 'home') {
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="DChain" className="h-12 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => handleNavClick('home', '#about')}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('home', '#vision')}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all"
              >
                Vision
              </button>
              <button
                onClick={() => handleNavClick('home', '#ecosystem')}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all"
              >
                Ecosystem
              </button>
              <button
                onClick={() => handleNavClick('home', '#developers')}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all"
              >
                Developers
              </button>
              <button
                onClick={() => handleNavClick('home', '#team')}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all"
              >
                Team
              </button>
              <button
                onClick={() => handleNavClick('grants')}
                className={`transition-all ${
                  currentPage === 'grants' ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500' : 'text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500'
                }`}
              >
                Grants
              </button>
              <button
                onClick={() => handleNavClick('home', '#community')}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all"
              >
                Community
              </button>
              <button
                onClick={() => handleNavClick('home', '#contact')}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-500/20 mt-2">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => handleNavClick('home', '#about')}
                className="text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all text-left py-3 px-4"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('home', '#vision')}
                className="text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all text-left py-3 px-4"
              >
                Vision
              </button>
              <button
                onClick={() => handleNavClick('home', '#ecosystem')}
                className="text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all text-left py-3 px-4"
              >
                Ecosystem
              </button>
              <button
                onClick={() => handleNavClick('home', '#developers')}
                className="text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all text-left py-3 px-4"
              >
                Developers
              </button>
              <button
                onClick={() => handleNavClick('home', '#team')}
                className="text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all text-left py-3 px-4"
              >
                Team
              </button>
              <button
                onClick={() => handleNavClick('grants')}
                className={`transition-all text-left py-3 px-4 ${
                  currentPage === 'grants' ? 'text-white bg-orange-500/10' : 'text-gray-300 hover:text-white hover:bg-orange-500/10'
                }`}
              >
                Grants
              </button>
              <button
                onClick={() => handleNavClick('home', '#community')}
                className="text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all text-left py-3 px-4"
              >
                Community
              </button>
              <button
                onClick={() => handleNavClick('home', '#contact')}
                className="text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all text-left py-3 px-4"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
