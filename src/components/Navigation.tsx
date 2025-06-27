
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Trophy, Users, Star, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Explore", href: "/", icon: Trophy },
    { name: "Tournaments", href: "/tournaments", icon: Trophy },
    { name: "Leaderboard", href: "/leaderboard", icon: Star },
    { name: "Community", href: "/community", icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gaming-black/95 backdrop-blur-md border-b border-neon-red/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0cadafb7-d999-4925-871a-ad67700779a9.png" 
              alt="Tech Tribe Logo" 
              className="w-10 h-10 animate-glow-pulse"
            />
            <span className="text-xl font-rajdhani font-bold text-white">
              TECH <span className="text-neon-red">TRIBE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-neon-red transition-colors duration-300 font-rajdhani font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gaming-gray/50 px-3 py-2 rounded-lg border border-neon-red/20">
              <span className="text-2xl">🪙</span>
              <span className="text-neon-red font-rajdhani font-bold">200</span>
              <span className="text-gray-400 text-sm">X-Coins</span>
            </div>
            <Button className="cta-button">
              QUESTS 🎯
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-neon-red transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gaming-gray/95 backdrop-blur-md border-t border-neon-red/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-neon-red transition-colors duration-300 font-rajdhani font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-neon-red/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🪙</span>
                    <span className="text-neon-red font-rajdhani font-bold">200 X-Coins</span>
                  </div>
                </div>
                <Button className="w-full cta-button">
                  QUESTS 🎯
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
