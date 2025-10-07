import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import CalendarEmbed from '@/components/CalendarEmbed';
import SubscriptionForm from '@/components/SubscriptionForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <CalendarEmbed />
        <SubscriptionForm />
      </main>
      <Footer />
    </div>
  );
}
