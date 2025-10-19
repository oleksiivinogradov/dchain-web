import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Vision } from './components/Vision';
import { HowItWorks } from './components/HowItWorks';
import { UnlockOpportunities } from './components/UnlockOpportunities';
import { DTree } from './components/DTree';
import { Roadmap } from './components/Roadmap';
import { Developers } from './components/Developers';
import { Team } from './components/Team';
import { Ecosystem } from './components/Ecosystem';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { Grants } from './components/Grants';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'grants'>('home');

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero heroImage="https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA4NjAyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
          <About />
          <Vision visionImage="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NjA4NTk0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
          <HowItWorks />
          <UnlockOpportunities />
          <DTree />
          <Roadmap />
          <Developers />
          <Team />
          <Ecosystem />
          <Community />
          <Footer />
        </>
      ) : (
        <>
          <Grants />
          <Footer />
        </>
      )}
    </div>
  );
}
