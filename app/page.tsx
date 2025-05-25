'use client';

import { useState } from 'react';
import Sidebar from '@/components/Slidebar';
import Tabs from '@/components/Tabs';
import Publication from '@/components/Publication';
import Projects from '@/components/Projects';
import ResearchExperience from '@/components/ResearchExperience';
import Home from '@/components/Home';
import Awards from '@/components/Awards';
import Certification from '@/components/Certification';
import UpcomingBook from '@/components/Book';
import Contact from '@/components/ContactSection'; // Add this import
import ContactSection from '@/components/ContactSection';


export default function Page() {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'publications' | 'research' | 'awards' | 'certification'>('home');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'home' && <Home />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'publications' && <Publication />}
        {activeTab === 'research' && <ResearchExperience />}
        {activeTab === 'awards' && <Awards />}
        {activeTab === 'certification' && <Certification />}
        {activeTab === 'upcomingbook' && <UpcomingBook />}
        {activeTab === 'contact' && <ContactSection />}

      </main>
    </div>
  );
}
