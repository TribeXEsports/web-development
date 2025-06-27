
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface LeaderboardPlayer {
  rank: number;
  username: string;
  avatar: string;
  coins: number;
  wins: number;
  winRate: number;
}

const leaderboardData: LeaderboardPlayer[] = [
  {
    rank: 1,
    username: "ProGamer_X",
    avatar: "👑",
    coins: 15420,
    wins: 127,
    winRate: 89
  },
  {
    rank: 2,
    username: "SkillMaster",
    avatar: "🥈",
    coins: 12890,
    wins: 98,
    winRate: 85
  },
  {
    rank: 3,
    username: "EliteSniper",
    avatar: "🥉",
    coins: 11250,
    wins: 87,
    winRate: 82
  },
  {
    rank: 4,
    username: "GameChanger",
    avatar: "🎮",
    coins: 9840,
    wins: 76,
    winRate: 78
  },
  {
    rank: 5,
    username: "VictoryKing",
    avatar: "⚡",
    coins: 8920,
    wins: 69,
    winRate: 75
  }
];

const Leaderboard = () => {
  const scrollRef = useScrollAnimation();
  const scrollRef2 = useScrollAnimation();

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-black";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-black";
      case 3:
        return "bg-gradient-to-r from-amber-600 to-yellow-700 text-white";
      default:
        return "bg-gaming-gray text-white";
    }
  };

  return (
    <section id="leaderboard" className="py-20 px-4">
      <div className="container mx-auto">
        <div ref={scrollRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-4">
            <span className="text-white">TOP</span>{' '}
            <span className="text-neon-red glow-text">PLAYERS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-exo">
            Hall of Fame - The best players in the arena. Climb the ranks and claim your spot!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Top 3 Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {leaderboardData.slice(0, 3).map((player, index) => (
              <Card 
                key={player.rank}
                className={`tournament-card text-center p-8 animate-scale-in ${
                  player.rank === 1 ? 'md:order-2 transform md:scale-110 border-yellow-400/40' :
                  player.rank === 2 ? 'md:order-1' : 'md:order-3'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="text-6xl mb-2">{player.avatar}</div>
                  <Badge className={`${getRankStyle(player.rank)} font-rajdhani font-bold px-3 py-1`}>
                    #{player.rank}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-rajdhani font-bold text-white mb-2">
                  {player.username}
                </h3>
                
                <div className="space-y-2 text-sm font-exo">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coins:</span>
                    <span className="text-neon-red font-semibold">{player.coins.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wins:</span>
                    <span className="text-green-400 font-semibold">{player.wins}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Win Rate:</span>
                    <span className="text-blue-400 font-semibold">{player.winRate}%</span>
                  </div>
                </div>
                
                {player.rank === 1 && (
                  <div className="mt-4 p-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
                    <div className="text-yellow-400 font-rajdhani font-bold text-sm">
                      👑 CHAMPION
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Rest of Leaderboard */}
          <Card ref={scrollRef2} className="scroll-reveal gaming-card p-6">
            <h3 className="text-2xl font-rajdhani font-bold text-white mb-6 text-center">
              FULL LEADERBOARD
            </h3>
            
            <div className="space-y-3">
              {leaderboardData.map((player, index) => (
                <div 
                  key={player.rank}
                  className="flex items-center justify-between p-4 bg-gaming-black/30 rounded-lg border border-neon-red/10 hover:border-neon-red/30 transition-all duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-rajdhani font-bold ${
                      player.rank <= 3 ? getRankStyle(player.rank) : 'bg-gaming-gray text-white'
                    }`}>
                      {player.rank}
                    </div>
                    
                    <div className="text-2xl">{player.avatar}</div>
                    
                    <div>
                      <div className="font-rajdhani font-semibold text-white">
                        {player.username}
                      </div>
                      <div className="text-sm text-gray-400 font-exo">
                        {player.wins} wins • {player.winRate}% win rate
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-neon-red font-rajdhani font-bold">
                      {player.coins.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400 font-exo">X-Coins</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-block p-4 bg-neon-red/5 border border-neon-red/20 rounded-lg">
                <p className="text-gray-300 text-sm font-exo">
                  🎯 <strong>Your Rank:</strong> #12 • Keep playing to climb higher!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
