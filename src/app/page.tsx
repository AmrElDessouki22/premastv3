'use client';

import { Header } from '../components/ui/Header';
import { Footer } from '../components/ui/Footer';
import { HeroSection } from '../components/features/HeroSection';
import { AboutSection } from '../components/features/AboutSection';
import { TemplatePreview } from '../components/features/TemplatePreview';
import { SubscriptionForm } from '../components/features/SubscriptionForm';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TemplatePreview />
        <SubscriptionForm />
      </main>
      <Footer />
    </div>
  );
}