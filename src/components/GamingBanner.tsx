
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GamingBanner = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-black via-gaming-gray to-gaming-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-red/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div ref={scrollRef} className="scroll-reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-bold mb-4">
            <span className="text-white">GAMING</span>{' '}
            <span className="text-neon-red glow-text">CONCEPTS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-exo">
            Immerse yourself in the ultimate gaming experience with cutting-edge visuals and competitive gameplay.
          </p>
        </div>

        {/* Gaming Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Esports Arena */}
          <div className="gaming-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🏟️</div>
            <h3 className="text-xl font-rajdhani font-bold text-white mb-3">Esports Arena</h3>
            <p className="text-gray-400 font-exo text-sm">
              Professional gaming environment with state-of-the-art equipment and live streaming capabilities.
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="px-3 py-1 bg-neon-red/20 text-neon-red text-xs rounded-full">Live Streaming</span>
              <span className="px-3 py-1 bg-neon-red/20 text-neon-red text-xs rounded-full">Pro Setup</span>
            </div>
          </div>

          {/* Battle Royale */}
          <div className="gaming-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">⚔️</div>
            <h3 className="text-xl font-rajdhani font-bold text-white mb-3">Battle Royale</h3>
            <p className="text-gray-400 font-exo text-sm">
              Intense multiplayer battles where only the strongest survive. Last player standing wins it all.
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="px-3 py-1 bg-neon-red/20 text-neon-red text-xs rounded-full">100 Players</span>
              <span className="px-3 py-1 bg-neon-red/20 text-neon-red text-xs rounded-full">Survival</span>
            </div>
          </div>

          {/* Championship */}
          <div className="gaming-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-rajdhani font-bold text-white mb-3">Championships</h3>
            <p className="text-gray-400 font-exo text-sm">
              Compete in official tournaments with massive prize pools and global recognition.
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="px-3 py-1 bg-neon-red/20 text-neon-red text-xs rounded-full">Big Prizes</span>
              <span className="px-3 py-1 bg-neon-red/20 text-neon-red text-xs rounded-full">Global</span>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-neon-red/10 to-glow-red/10 rounded-2xl p-8 border border-neon-red/20">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-2xl md:text-3xl font-rajdhani font-bold text-white mb-4">
            Ready to <span className="text-neon-red glow-text">Dominate</span>?
          </h3>
          <p className="text-gray-400 font-exo mb-6 max-w-2xl mx-auto">
            Join thousands of gamers in epic battles, win amazing prizes, and climb the leaderboards to become a gaming legend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cta-button">
              🚀 START GAMING
            </button>
            <button className="border border-neon-red/30 text-neon-red hover:bg-neon-red/10 font-rajdhani font-bold px-8 py-4 rounded-lg transition-all duration-300">
              📊 VIEW STATS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingBanner;
