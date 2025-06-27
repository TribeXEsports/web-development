
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Clock, Trophy, Star, Share2 } from "lucide-react";
import Navigation from "@/components/Navigation";

const TournamentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isJoined, setIsJoined] = useState(false);

  // Mock tournament data - in real app this would come from API
  const tournament = {
    id: id || '1',
    title: 'BGMI Championship',
    game: 'Battlegrounds Mobile India',
    image: '🎮',
    entryFee: 25,
    prizePool: '₹10,000',
    participants: '64/100',
    status: 'live' as const,
    timeLeft: '2h 15m',
    description: 'Join the ultimate BGMI championship and prove your skills in the battlegrounds. Top players will receive amazing rewards and recognition.',
    rules: [
      'No cheating or third-party software allowed',
      'Must use official BGMI app',
      'Respectful behavior required',
      'Follow tournament schedule strictly'
    ],
    prizeDistribution: [
      { position: '1st Place', prize: '₹5,000', percentage: '50%' },
      { position: '2nd Place', prize: '₹3,000', percentage: '30%' },
      { position: '3rd Place', prize: '₹2,000', percentage: '20%' }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'upcoming':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-neon-red/20 text-neon-red border-neon-red/30';
    }
  };

  const handleJoinTournament = () => {
    setIsJoined(!isJoined);
  };

  return (
    <div className="min-h-screen bg-gaming-black">
      <Navigation />
      
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-black via-gaming-gray to-gaming-black opacity-90" />
        <div className="absolute inset-0 bg-red-glow opacity-20" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <Button
            variant="ghost"
            className="absolute top-4 left-4 text-white hover:text-neon-red"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Tournaments
          </Button>
          
          <div className="flex items-center space-x-6">
            <div className="text-6xl md:text-8xl">{tournament.image}</div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Badge className={`${getStatusColor(tournament.status)} font-rajdhani text-xs uppercase`}>
                  {tournament.status === 'live' && '🔴 '}{tournament.status}
                </Badge>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-neon-red">
                  <Share2 size={16} />
                </Button>
              </div>
              <h1 className="text-3xl md:text-5xl font-rajdhani font-bold text-white mb-2">
                {tournament.title}
              </h1>
              <p className="text-gray-400 text-lg font-exo mb-4">{tournament.game}</p>
              <div className="flex items-center space-x-6 text-sm font-exo">
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-neon-red" />
                  <span className="text-white">{tournament.participants}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-yellow-400" />
                  <span className="text-white">{tournament.timeLeft}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy size={16} className="text-green-400" />
                  <span className="text-white">{tournament.prizePool}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tournament Info */}
            <div className="gaming-card p-6">
              <h2 className="text-2xl font-rajdhani font-bold text-white mb-4">Tournament Details</h2>
              <p className="text-gray-300 font-exo leading-relaxed mb-6">
                {tournament.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gaming-gray/30 rounded-lg">
                  <div className="text-neon-red font-rajdhani font-bold text-xl">{tournament.entryFee}</div>
                  <div className="text-gray-400 text-sm">Entry Fee (X-Coins)</div>
                </div>
                <div className="text-center p-4 bg-gaming-gray/30 rounded-lg">
                  <div className="text-green-400 font-rajdhani font-bold text-xl">{tournament.prizePool}</div>
                  <div className="text-gray-400 text-sm">Prize Pool</div>
                </div>
                <div className="text-center p-4 bg-gaming-gray/30 rounded-lg">
                  <div className="text-white font-rajdhani font-bold text-xl">{tournament.participants}</div>
                  <div className="text-gray-400 text-sm">Players</div>
                </div>
                <div className="text-center p-4 bg-gaming-gray/30 rounded-lg">
                  <div className="text-yellow-400 font-rajdhani font-bold text-xl">{tournament.timeLeft}</div>
                  <div className="text-gray-400 text-sm">Time Left</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2 font-exo">
                  <span>Tournament Slots</span>
                  <span>{tournament.participants}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-neon-red to-glow-red h-3 rounded-full transition-all duration-500"
                    style={{ width: '64%' }}
                  />
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="gaming-card p-6">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-4 flex items-center">
                <Star className="mr-2 text-neon-red" size={20} />
                Tournament Rules
              </h3>
              <ul className="space-y-3">
                {tournament.rules.map((rule, index) => (
                  <li key={index} className="text-gray-300 font-exo flex items-start">
                    <span className="text-neon-red mr-3 font-bold">{index + 1}.</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Join Tournament Card */}
            <div className="gaming-card p-6 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-rajdhani font-bold text-white mb-4">
                Ready to Compete?
              </h3>
              <div className="mb-6">
                <div className="text-3xl font-rajdhani font-bold text-neon-red mb-2">
                  {tournament.entryFee} X-Coins
                </div>
                <div className="text-gray-400 text-sm font-exo">Entry Fee Required</div>
              </div>
              <Button 
                className={`w-full font-rajdhani font-bold text-lg py-6 transition-all duration-300 ${
                  isJoined
                    ? 'bg-green-600 hover:bg-green-700 text-white border-green-600'
                    : 'cta-button'
                }`}
                onClick={handleJoinTournament}
              >
                {isJoined ? '✅ JOINED TOURNAMENT' : '⚡ JOIN TOURNAMENT'}
              </Button>
              <p className="text-gray-500 text-xs mt-3 font-exo">
                You have 200 X-Coins in your wallet
              </p>
            </div>

            {/* Prize Distribution */}
            <div className="gaming-card p-6">
              <h3 className="text-lg font-rajdhani font-bold text-white mb-4 flex items-center">
                <Trophy className="mr-2 text-yellow-400" size={20} />
                Prize Distribution
              </h3>
              <div className="space-y-3">
                {tournament.prizeDistribution.map((prize, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gaming-gray/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-500 text-black' :
                        index === 1 ? 'bg-gray-400 text-black' :
                        'bg-yellow-600 text-white'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="text-white font-exo text-sm">{prize.position}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-rajdhani font-bold">{prize.prize}</div>
                      <div className="text-gray-500 text-xs">{prize.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails;
