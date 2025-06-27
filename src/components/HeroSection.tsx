
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-black via-gaming-gray to-gaming-black" />
      <div className="absolute inset-0 bg-gradient-radial from-neon-red/10 via-transparent to-transparent" />
      
      {/* Animated Particle Effects */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-neon-red rounded-full animate-ping opacity-60" />
      <div className="absolute top-32 right-20 w-1 h-1 bg-glow-red rounded-full animate-pulse opacity-80" />
      <div className="absolute bottom-40 left-32 w-3 h-3 bg-neon-red/40 rounded-full animate-bounce opacity-70" />
      <div className="absolute bottom-20 right-40 w-1 h-1 bg-neon-red rounded-full animate-ping opacity-50" />
      
      {/* Large Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-red/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-glow-red/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in-up">
          {/* Redesigned Logo Section */}
          <div className="mb-16 flex justify-center">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-8 bg-gradient-to-r from-neon-red/30 via-glow-red/20 to-neon-red/30 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Middle glow ring */}
              <div className="absolute -inset-6 bg-gradient-to-r from-glow-red/40 to-neon-red/40 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500" />
              
              {/* Inner container */}
              <div className="relative bg-gradient-to-br from-gaming-gray/80 to-gaming-black/90 p-8 rounded-full border-2 border-neon-red/50 shadow-2xl backdrop-blur-sm group-hover:border-neon-red/80 transition-all duration-300">
                <img 
                  src="/lovable-uploads/0cadafb7-d999-4925-871a-ad67700779a9.png" 
                  alt="Tech Tribe Logo" 
                  className="w-32 h-32 md:w-40 md:h-40 animate-float filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Inner light effects */}
                <div className="absolute inset-4 bg-gradient-to-t from-neon-red/20 via-transparent to-glow-red/10 rounded-full" />
                <div className="absolute inset-6 bg-gradient-radial from-white/5 to-transparent rounded-full" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-neon-red rounded-full animate-ping" />
              <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-glow-red rounded-full animate-pulse delay-500" />
            </div>
          </div>
          
          {/* Completely Redesigned Main Title */}
          <div className="mb-12 relative">
            {/* Background text glow */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-orbitron font-black text-neon-red blur-sm">
                ARENA
              </h1>
            </div>
            
            {/* Main title */}
            <div className="relative z-10">
              <h1 className="font-orbitron font-black leading-none tracking-wider mb-4">
                <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent filter drop-shadow-lg mb-2">
                  ENTER THE
                </span>
                <span className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-neon-red via-white to-neon-red bg-clip-text text-transparent animate-intense-glow-pulse filter drop-shadow-2xl">
                  ARENA
                </span>
              </h1>
              
              {/* Decorative corner elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-l-3 border-t-3 border-neon-red/60 animate-pulse" />
              <div className="absolute -top-6 -right-6 w-12 h-12 border-r-3 border-t-3 border-neon-red/60 animate-pulse delay-300" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-l-3 border-b-3 border-neon-red/60 animate-pulse delay-700" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-3 border-b-3 border-neon-red/60 animate-pulse delay-1000" />
            </div>
          </div>
          
          {/* Enhanced Tagline */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-red/10 to-transparent blur-xl" />
            <p className="relative text-2xl md:text-4xl font-rajdhani font-bold tracking-[0.3em] mb-2">
              <span className="bg-gradient-to-r from-neon-red via-white to-neon-red bg-clip-text text-transparent">
                ⚡ WIN WITH SKILL ⚡
              </span>
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent mx-auto" />
          </div>
          
          {/* Improved Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-exo relative">
            <span className="relative z-10 block">
              Join the ultimate esports tournament platform where legends are born.
            </span>
            <span className="relative z-10 block mt-2 text-lg text-gray-400">
              Compete in skill-based games, climb the leaderboards, and claim your victory.
            </span>
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button 
              className="group relative overflow-hidden bg-gradient-to-r from-neon-red via-glow-red to-neon-red text-white font-orbitron font-bold px-16 py-8 text-xl rounded-xl border-2 border-neon-red/50 shadow-2xl hover:shadow-neon-red/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              onClick={() => scrollToSection('tournaments')}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span className="text-2xl">🏆</span>
                <span>JOIN TOURNAMENTS</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-glow-red to-neon-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/20 rounded-full group-hover:animate-ping" />
            </Button>
            
            <Button 
              variant="outline" 
              className="group relative border-3 border-neon-red/60 text-neon-red hover:bg-neon-red/20 font-orbitron font-bold px-12 py-8 text-xl rounded-xl backdrop-blur-sm bg-gaming-black/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              onClick={() => scrollToSection('leaderboard')}
            >
              <span className="flex items-center space-x-3">
                <span className="text-2xl">📊</span>
                <span>VIEW LEADERBOARD</span>
              </span>
            </Button>
          </div>
        </div>
        
        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-slide-in-right">
          {[
            { value: "500+", label: "Active Players", icon: "👥", color: "from-blue-400 to-cyan-400" },
            { value: "₹50,000", label: "Prize Pool", icon: "💰", color: "from-yellow-400 to-orange-400" },
            { value: "24/7", label: "Live Tournaments", icon: "⚡", color: "from-green-400 to-emerald-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative mb-4 p-6 rounded-2xl bg-gradient-to-br from-gaming-gray/50 to-gaming-black/70 border border-neon-red/20 backdrop-blur-sm group-hover:border-neon-red/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-5xl mb-4 filter drop-shadow-lg">{stat.icon}</div>
                <div className={`text-5xl md:text-6xl font-orbitron font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-rajdhani text-lg tracking-wide font-medium">{stat.label}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-neon-red/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
