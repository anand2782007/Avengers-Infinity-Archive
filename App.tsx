import { useState, useCallback } from 'react';
import { SmoothScrollProvider } from '@/context/SmoothScrollContext';
import { Navigation } from '@/components/Navigation';
import { Preloader } from '@/components/Preloader';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { AvengersSection } from '@/sections/AvengersSection';
import { MediaGallerySection } from '@/sections/MediaGallerySection';
import { GridSection } from '@/sections/GridSection';
import { MediaBrowserSection } from '@/sections/MediaBrowserSection';
import { FeaturedStorySection } from '@/sections/FeaturedStorySection';
import { EasterEggsSection } from '@/sections/EasterEggsSection';

function AppContent() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
    setTimeout(() => setShowPreloader(false), 100);
  }, []);

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <Navigation />

      <main>
        <HeroSection ready={preloaderDone} />
        <AvengersSection />
        <MediaGallerySection />
        <GridSection />
        <MediaBrowserSection />
        <FeaturedStorySection />
        <EasterEggsSection />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <SmoothScrollProvider>
      <AppContent />
    </SmoothScrollProvider>
  );
}

export default App;
