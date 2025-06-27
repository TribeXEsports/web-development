
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CommunitySection = () => {
  const scrollRef = useScrollAnimation();

  const handleWhatsAppJoin = () => {
    // Replace with actual WhatsApp group link
    window.open('https://chat.whatsapp.com/tech-tribe-community', '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://youtube.com/@techtribe', '_blank');
  };

  const handleDiscordClick = () => {
    window.open('https://discord.gg/techtribe', '_blank');
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <Card ref={scrollRef} className="scroll-reveal gaming-card p-8 md:p-12 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block p-4 bg-green-500/10 rounded-full mb-4">
              <div className="text-6xl animate-glow-pulse" style={{filter: 'drop-shadow(0 0 10px #25D366)'}}>
                📱
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold mb-4">
              <span className="text-white">JOIN OUR</span>{' '}
              <span className="text-green-400 glow-text">COMMUNITY</span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 font-exo">
              Connect with thousands of gamers, get instant updates, room codes, and live support. 
              Stay ahead of the competition!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gaming-black/50 rounded-lg border border-green-400/20 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-rajdhani font-bold text-white mb-2">Instant Updates</h3>
              <p className="text-sm text-gray-400 font-exo">Get notified about new tournaments and matches</p>
            </div>
            
            <div className="p-6 bg-gaming-black/50 rounded-lg border border-green-400/20 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl mb-2">🎮</div>
              <h3 className="font-rajdhani font-bold text-white mb-2">Room Codes</h3>
              <p className="text-sm text-gray-400 font-exo">Receive room codes and match details instantly</p>
            </div>
            
            <div className="p-6 bg-gaming-black/50 rounded-lg border border-green-400/20 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl mb-2">🆘</div>
              <h3 className="font-rajdhani font-bold text-white mb-2">Live Support</h3>
              <p className="text-sm text-gray-400 font-exo">24/7 community support and assistance</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-rajdhani font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-green-500/25 hover:shadow-2xl transition-all duration-300"
              style={{textTransform: 'uppercase', letterSpacing: '1px'}}
              onClick={handleWhatsAppJoin}
            >
              📱 JOIN WHATSAPP COMMUNITY
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-rajdhani font-bold"
                onClick={handleYouTubeClick}
              >
                📺 YOUTUBE CHANNEL
              </Button>
              
              <Button 
                variant="outline" 
                className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 font-rajdhani font-bold"
                onClick={handleDiscordClick}
              >
                💬 DISCORD SERVER
              </Button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
            <p className="text-sm text-gray-300 font-exo">
              <strong>5,000+ Active Members</strong> • Join the fastest growing esports community in India
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;
