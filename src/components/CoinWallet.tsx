
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const CoinWallet = () => {
  const scrollRef = useScrollAnimation();
  const [coins, setCoins] = useState(200);
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);

  const handleBuyCoins = () => {
    // Simulate buying coins
    setCoins(prev => prev + 100);
    alert('🎉 Successfully purchased 100 X-Coins! Payment integration coming soon.');
  };

  const transactions = [
    { type: 'win', amount: 50, description: 'Tournament Victory', time: '2 hours ago' },
    { type: 'purchase', amount: 100, description: 'Coin Purchase', time: '1 day ago' },
    { type: 'entry', amount: -25, description: 'Tournament Entry', time: '2 days ago' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card ref={scrollRef} className="scroll-reveal gaming-card p-8 text-center">
            <div className="mb-6">
              <div className="inline-block relative">
                <div className="text-6xl animate-coin-spin coin-glow">🪙</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-red rounded-full animate-pulse" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-rajdhani font-bold text-white mb-4">
              YOUR WALLET
            </h3>
            
            <div className="mb-6">
              <div className="text-4xl md:text-5xl font-rajdhani font-black text-neon-red glow-text mb-2">
                {coins} X-COINS
              </div>
              <p className="text-gray-400 font-exo">Available Balance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gaming-black/50 rounded-lg border border-neon-red/10">
                <div className="text-2xl font-rajdhani font-bold text-green-400">+50</div>
                <div className="text-sm text-gray-400 font-exo">Coins Won Today</div>
              </div>
              
              <div className="text-center p-4 bg-gaming-black/50 rounded-lg border border-neon-red/10">
                <div className="text-2xl font-rajdhani font-bold text-blue-400">5</div>
                <div className="text-sm text-gray-400 font-exo">Tournaments Joined</div>
              </div>
              
              <div className="text-center p-4 bg-gaming-black/50 rounded-lg border border-neon-red/10">
                <div className="text-2xl font-rajdhani font-bold text-yellow-400">#12</div>
                <div className="text-sm text-gray-400 font-exo">Current Rank</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="cta-button" onClick={handleBuyCoins}>
                💰 BUY COINS
              </Button>
              
              <Button 
                variant="outline" 
                className="border-neon-red/30 text-neon-red hover:bg-neon-red/10 font-rajdhani font-bold"
                onClick={() => setShowTransactionHistory(!showTransactionHistory)}
              >
                📈 TRANSACTION HISTORY
              </Button>
            </div>

            {showTransactionHistory && (
              <div className="mt-6 p-4 bg-gaming-black/30 rounded-lg border border-neon-red/20 animate-fade-in-up">
                <h4 className="font-rajdhani font-bold text-white mb-4">Recent Transactions</h4>
                <div className="space-y-2">
                  {transactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gaming-black/50 rounded">
                      <div className="text-left">
                        <div className="text-sm text-white font-exo">{transaction.description}</div>
                        <div className="text-xs text-gray-400 font-exo">{transaction.time}</div>
                      </div>
                      <div className={`font-rajdhani font-bold ${
                        transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-6 p-4 bg-neon-red/5 border border-neon-red/20 rounded-lg">
              <p className="text-sm text-gray-300 font-exo">
                💡 <strong>Pro Tip:</strong> Win tournaments to earn more X-Coins! 
                Each victory multiplies your investment.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoinWallet;
