/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PROFILE_DATA, PROJECTS_DATA, ProjectItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectGallery } from './components/ProjectGallery';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { ResumeModal } from './components/ResumeModal';
import { LightboxModal } from './components/LightboxModal';

const ORIGINAL_PHOTO_STORAGE_KEY = 'sowmiga_original_photo_v2';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [customScreenshots, setCustomScreenshots] = useState<Record<string, string>>({});
  const [portraitSrc, setPortraitSrc] = useState<string>(() => {
    try {
      return localStorage.getItem(ORIGINAL_PHOTO_STORAGE_KEY) || PROFILE_DATA.portraitUrl;
    } catch {
      return PROFILE_DATA.portraitUrl;
    }
  });
  const [lightboxState, setLightboxState] = useState<{
    imageUrl: string | null;
    title: string;
    caption: string;
  }>({
    imageUrl: null,
    title: '',
    caption: ''
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'workflow',
      'education',
      'certifications',
      'contact'
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUploadPortrait = (dataUrl: string) => {
    setPortraitSrc(dataUrl);
    try {
      localStorage.setItem(ORIGINAL_PHOTO_STORAGE_KEY, dataUrl);
    } catch {
      // ignore storage quota errors
    }
  };

  const handleSelectProjectById = (id: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleUploadCustomScreenshot = (projectId: string, dataUrl: string) => {
    setCustomScreenshots((prev) => ({
      ...prev,
      [projectId]: dataUrl
    }));
  };

  const handleOpenLightbox = (imageUrl: string, title: string, caption: string) => {
    setLightboxState({ imageUrl, title, caption });
  };

  const handleCloseLightbox = () => {
    setLightboxState({ imageUrl: null, title: '', caption: '' });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? 'bg-[#0B0F17] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} isDark={isDark} />

      {/* Main Content */}
      <main>
        {/* Original profile photo is displayed exclusively once inside Hero */}
        <Hero
          isDark={isDark}
          portraitSrc={portraitSrc}
          onUploadPortrait={handleUploadPortrait}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onSelectProjectById={handleSelectProjectById}
        />

        <About
          isDark={isDark}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        <Skills
          isDark={isDark}
          onSelectProjectById={handleSelectProjectById}
        />

        <ProjectGallery
          isDark={isDark}
          customScreenshots={customScreenshots}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenLightbox={handleOpenLightbox}
        />

        <CredentialsSection isDark={isDark} />

        <ContactSection isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer
        isDark={isDark}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Project Case Study Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isDark={isDark}
        customScreenshots={customScreenshots}
        onUploadCustomScreenshot={handleUploadCustomScreenshot}
        onClose={() => setSelectedProject(null)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Printable Verbatim Resume & PDF Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        isDark={isDark}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Fullscreen Image Lightbox */}
      <LightboxModal
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
