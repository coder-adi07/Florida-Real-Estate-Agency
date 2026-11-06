import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandIntro from '@/components/BrandIntro';
import BuyerSeller from '@/components/BuyerSeller';
import AgentMembership from '@/components/AgentMembership';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ServiceAreas from '@/components/ServiceAreas';
import FeaturedProperties from '@/components/FeaturedProperties';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <BrandIntro />
        <BuyerSeller />
        <AgentMembership />
        <WhyChooseUs />
        <Testimonials />
        <ServiceAreas />
        <FeaturedProperties />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

