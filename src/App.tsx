import React, { useState } from 'react';
import { ViewMode } from './types';
import { AdminProvider } from './context/AdminContext';
import { Header } from './components/Header';
import { EditorialHero } from './components/EditorialHero';
import { ForensicNarrative } from './components/ForensicNarrative';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { DataDashboard } from './components/DataDashboard';
import { CaseDossiers } from './components/CaseDossiers';
import { SurveillanceAndAuditView } from './components/SurveillanceAndAuditView';
import { SystemArchitecture } from './components/SystemArchitecture';
import { DocumentaryViewer } from './components/DocumentaryViewer';
import { AdminPortal } from './components/AdminPortal';
import { Footer } from './components/Footer';

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewMode>('narrative');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-658931');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    setCurrentView('cases');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewChange = (view: ViewMode) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#111111] font-sans-ui flex flex-col selection:bg-[#CC0000] selection:text-white">
      {/* Sticky Masthead & Header with Admin Link */}
      <Header
        currentView={currentView}
        onViewChange={handleViewChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Header on Primary Investigation View */}
      {currentView === 'narrative' && (
        <EditorialHero
          onSelectView={handleViewChange}
          onSelectCase={handleSelectCase}
        />
      )}

      {/* Main Dynamic Workspace Area */}
      <main className="flex-1">
        {currentView === 'narrative' && <ForensicNarrative />}
        {currentView === 'timeline' && <InteractiveTimeline />}
        {currentView === 'dashboard' && <DataDashboard />}
        {currentView === 'cases' && (
          <CaseDossiers
            selectedCaseId={selectedCaseId}
            onSelectCase={setSelectedCaseId}
          />
        )}
        {currentView === 'medical' && <SurveillanceAndAuditView />}
        {currentView === 'architecture' && <SystemArchitecture />}
        {currentView === 'archive' && <DocumentaryViewer />}
      </main>

      {/* Admin Management & Privacy Configuration Portal Modal */}
      <AdminPortal />

      {/* Footer & Comprehensive Citations */}
      <Footer
        onSelectView={handleViewChange}
        onSelectCase={handleSelectCase}
      />
    </div>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  );
}
