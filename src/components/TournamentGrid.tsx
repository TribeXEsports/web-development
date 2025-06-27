
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Users, Trophy, Clock, Coins } from "lucide-react";

interface Tournament {
  id: string;
  title: string;
  game: string;
  entryFee: number;
  prizePool: string;
  participants: string;
  status: 'live' | 'upcoming' | 'ended';
  timeLeft: string;
  image: string;
}

const tournaments: Tournament[] = [
  {
    id: '1',
    title: 'BGMI Championship',
    game: 'Battlegrounds Mobile India',
    entryFee: 25,
    prizePool: '₹10,000',
    participants: '64/100',
    status: 'live',
    timeLeft: '2h 15m',
    image: '🎮'
  },
  {
    id: '2',
    title: 'FF Max Tournament',
    game: 'Free Fire Max',
    entryFee: 15,
    prizePool: '₹5,000',
    participants: '32/50',
    status: 'upcoming',
    timeLeft: '1h 30m',
    image: '🔥'
  },
  {
    id: '3',
    title: 'COD Mobile Pro',
    game: 'Call of Duty Mobile',
    entryFee: 50,
    prizePool: '₹25,000',
    participants: '16/32',
    status: 'upcoming',
    timeLeft: '4h 45m',
    image: '💣'
  },
  {
    id: '4',
    title: 'Valorant 5v5',
    game: 'Valorant Mobile',
    entryFee: 100,
    prizePool: '₹50,000',
    participants: '8/16',
    status: 'upcoming',
    timeLeft: '6h 20m',
    image: '⚡'
  }
];

const TournamentGrid = () => {
  const scrollRef = useScrollAnimation();
  const navigate = useNavigate();
  const [joinedTournaments, setJoinedTournaments] = useState<string[]>([]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/40 shadow-lg shadow-green-500/20';
      case 'upcoming':
        return 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/40 shadow-lg shadow-yellow-500/20';
      case 'ended':
        return 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-400 border-gray-500/40';
      default:
        return 'bg-gradient-to-r from-neon-red/20 to-red-500/20 text-neon-red border-neon-red/40 shadow-lg shadow-neon-red/20';
    }
  };

  const handleJoinTournament = (tournamentId: string) => {
    if (joinedTournaments.includes(tournamentId)) {
      setJoinedTournaments(prev => prev.filter(id => id !== tournamentId));
      console.log(`Left tournament ${tournamentId}`);
    } else {
      setJoinedTournaments(prev => [...prev, tournamentId]);
      console.log(`Joined tournament ${tournamentId}`);
    }
  };

  const handleViewTournament = (tournamentId: string) => {
    console.log(`Navigating to tournament ${tournamentId}`);
    navigate(`/tournament/${tournamentId}`);
  };

  const handleShareTournament = (tournament: Tournament) => {
    if (navigator.share) {
      navigator.share({
        title: tournament.title,
        text: `Join ${tournament.title} - ${tournament.game}`,
        url: window.location.href + `tournament/${tournament.id}`
      });
    } else {
      navigator.clipboard.writeText(`${window.location.href}tournament/${tournament.id}`);
      console.log('Tournament link copied to clipboard');
    }
  };

  return (
    <section id="tournaments" className="py-20 px-4 bg-gradient-to-b from-gaming-black via-gaming-gray/20 to-gaming-black">
      <div className="container mx-auto">
        <div ref={scrollRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">ACTIVE</span>{' '}
            <span className="bg-gradient-to-r from-neon-red via-glow-red to-neon-red bg-clip-text text-transparent animate-pulse">TOURNAMENTS</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto font-exo leading-relaxed">
            Join live competitions and upcoming battles. Show your skills, compete with the best, and win big rewards.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {tournaments.map((tournament, index) => (
            <div 
              key={tournament.id} 
              className="group relative bg-gradient-to-br from-gaming-gray/80 to-gaming-black/90 rounded-2xl border border-neon-red/20 overflow-hidden transition-all duration-500 hover:border-neon-red/50 hover:shadow-2xl hover:shadow-neon-red/10 hover:-translate-y-2 cursor-pointer backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-red/5 via-transparent to-glow-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                    {tournament.image}
                  </div>
                  <Badge className={`${getStatusColor(tournament.status)} font-rajdhani text-xs uppercase font-bold px-3 py-1 rounded-full`}>
                    {tournament.status === 'live' && '🔴 '}
                    {tournament.status.toUpperCase()}
                  </Badge>
                </div>

                {/* Tournament Info */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-red transition-colors duration-300">
                    {tournament.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 font-exo font-medium">
                    {tournament.game}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm font-exo">
                    <div className="flex items-center space-x-2 bg-gaming-black/50 rounded-lg p-3 border border-neon-red/10">
                      <Coins className="w-4 h-4 text-neon-red" />
                      <div>
                        <p className="text-gray-400 text-xs">Entry Fee</p>
                        <p className="text-neon-red font-bold">{tournament.entryFee} X-Coins</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-gaming-black/50 rounded-lg p-3 border border-green-500/10">
                      <Trophy className="w-4 h-4 text-green-400" />
                      <div>
                        <p className="text-gray-400 text-xs">Prize Pool</p>
                        <p className="text-green-400 font-bold">{tournament.prizePool}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-gaming-black/50 rounded-lg p-3 border border-blue-500/10">
                      <Users className="w-4 h-4 text-blue-400" />
                      <div>
                        <p className="text-gray-400 text-xs">Players</p>
                        <p className="text-blue-400 font-bold">{tournament.participants}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-gaming-black/50 rounded-lg p-3 border border-yellow-500/10">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <div>
                        <p className="text-gray-400 text-xs">Time Left</p>
                        <p className="text-yellow-400 font-bold">{tournament.timeLeft}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2 font-exo">
                    <span>Tournament Progress</span>
                    <span>{tournament.participants}</span>
                  </div>
                  <div className="w-full bg-gaming-black/70 rounded-full h-3 border border-neon-red/20">
                    <div 
                      className="bg-gradient-to-r from-neon-red via-glow-red to-neon-red h-3 rounded-full transition-all duration-1000 shadow-lg shadow-neon-red/30"
                      style={{ width: `${(parseInt(tournament.participants.split('/')[0]) / parseInt(tournament.participants.split('/')[1])) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    className={`w-full font-rajdhani font-bold text-lg py-3 transition-all duration-300 transform hover:scale-105 ${
                      joinedTournaments.includes(tournament.id)
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 shadow-lg shadow-green-500/30'
                        : tournament.status === 'live'
                        ? 'bg-gradient-to-r from-neon-red to-glow-red hover:from-glow-red hover:to-neon-red text-white border-0 shadow-lg shadow-neon-red/40'
                        : 'bg-gradient-to-r from-neon-red/20 to-glow-red/20 hover:from-neon-red hover:to-glow-red hover:text-white text-neon-red border border-neon-red/30'
                    }`}
                    disabled={tournament.status === 'ended'}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleJoinTournament(tournament.id);
                    }}
                  >
                    {tournament.status === 'ended' ? '🏁 TOURNAMENT ENDED' :
                     joinedTournaments.includes(tournament.id) ? '✅ JOINED - READY TO PLAY' :
                     tournament.status === 'live' ? '⚡ JOIN LIVE BATTLE' : '🎯 JOIN TOURNAMENT'}
                  </Button>

                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 font-rajdhani font-semibold border-neon-red/30 text-neon-red hover:bg-neon-red/10 hover:border-neon-red/50 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewTournament(tournament.id);
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      VIEW DETAILS
                    </Button>

                    <Button 
                      variant="outline" 
                      size="icon"
                      className="border-neon-red/30 text-neon-red hover:bg-neon-red/10 hover:border-neon-red/50 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShareTournament(tournament);
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            className="bg-gradient-to-r from-neon-red via-glow-red to-neon-red text-white font-orbitron font-bold px-12 py-4 text-xl rounded-xl border-2 border-neon-red/50 shadow-2xl hover:shadow-neon-red/40 transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate('/tournaments')}
          >
            <Trophy className="w-6 h-6 mr-3" />
            VIEW ALL TOURNAMENTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TournamentGrid;
