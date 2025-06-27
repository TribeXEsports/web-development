
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TournamentGrid from "@/components/TournamentGrid";
import GamingBanner from "@/components/GamingBanner";  
import CoinWallet from "@/components/CoinWallet";
import Leaderboard from "@/components/Leaderboard";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-black">
      <Navigation />
      <HeroSection />
      <TournamentGrid />
      <GamingBanner />
      <CoinWallet />
      <Leaderboard />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
