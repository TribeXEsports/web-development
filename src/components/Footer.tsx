
const Footer = () => {
  const handleSocialClick = (platform: string) => {
    const links = {
      youtube: 'https://youtube.com/@techtribe',
      discord: 'https://discord.gg/techtribe',
      whatsapp: 'https://chat.whatsapp.com/tech-tribe-community'
    };
    window.open(links[platform as keyof typeof links], '_blank');
  };

  return (
    <footer className="bg-gaming-black border-t border-neon-red/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-4">
              <img 
                src="/lovable-uploads/0cadafb7-d999-4925-871a-ad67700779a9.png" 
                alt="Tech Tribe Logo" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-1">
                  TECH <span className="text-neon-red">TRIBE</span>
                </h3>
                <p className="text-xs text-gray-500 font-exo">EST. 2024</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md font-exo mb-4">
              The ultimate esports tournament platform. Join competitions, win prizes, 
              and dominate the leaderboards in India's premier gaming arena.
            </p>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('youtube')}
                className="w-10 h-10 bg-gaming-gray hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">📺</span>
              </button>
              <button 
                onClick={() => handleSocialClick('discord')}
                className="w-10 h-10 bg-gaming-gray hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">💬</span>
              </button>
              <button 
                onClick={() => handleSocialClick('whatsapp')}
                className="w-10 h-10 bg-gaming-gray hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">📱</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rajdhani font-bold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Home', 'Tournaments', 'Leaderboard', 'Wallet', 'Community'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-neon-red transition-colors duration-300 font-exo"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-rajdhani font-bold text-white mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              {['Help Center', 'Contact Us', 'Terms of Service', 'Privacy Policy', 'Fair Play'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-neon-red transition-colors duration-300 font-exo"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gaming-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 font-exo">
            © 2024 Tech Tribe. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-400 font-exo">Made with</span>
            <span className="text-neon-red animate-pulse">❤️</span>
            <span className="text-gray-400 font-exo">in</span>
            <span className="text-orange-400 font-semibold font-exo">India</span>
            <span className="text-2xl">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
