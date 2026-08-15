import React, { useState } from 'react';
import { ViewMode } from '../types';
import { useAdmin } from '../context/AdminContext';
import { 
  FileText, 
  Clock, 
  BarChart3, 
  Briefcase, 
  Radio, 
  GitFork, 
  Archive, 
  Search, 
  Download, 
  Menu,
  X,
  Lock,
  Unlock,
  Shield
} from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  searchQuery,
  onSearchChange
}) => {
  const { settings, setShowAdminModal } = useAdmin();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ViewMode; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'narrative', label: 'Investigation', icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'timeline', label: 'Timeline', icon: <Clock className="w-3.5 h-3.5" />, badge: '2020-2026' },
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-3.5 h-3.5" />, badge: '6 Charts' },
    { id: 'cases', label: 'Dossiers', icon: <Briefcase className="w-3.5 h-3.5" />, badge: '8 Matters' },
    { id: 'medical', label: 'Surveillance & Labs', icon: <Radio className="w-3.5 h-3.5" />, badge: 'V2K & Audits' },
    { id: 'architecture', label: 'Architecture', icon: <GitFork className="w-3.5 h-3.5" />, badge: 'Parallel Review' },
    { id: 'archive', label: 'Archive', icon: <Archive className="w-3.5 h-3.5" /> }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F4]/98 backdrop-blur-xs border-b-[1.5px] border-[#111111] shadow-xs">
      {/* Editorial Header Grid matching Design Variation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mono text-[#CC0000] mb-1">
            Investigative Brief // #DMP-2026-SEA
          </div>
          <button 
            onClick={() => onViewChange('narrative')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <h1 className="font-serif-headline text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#111111] leading-[0.9] hover:text-[#CC0000] transition-colors">
              Demopocrisy.
            </h1>
          </button>
        </div>

        <div className="text-left sm:text-right max-w-sm">
          <div className="mono text-[#111111] mb-1">
            Jurisdiction: King County, WA
          </div>
          <p className="text-[11px] font-mono text-zinc-700 leading-snug">
            The institutional displacement of evidentiary review and due process (2021–2026).
          </p>
        </div>
      </div>

      {/* Navigation Bar matching Design Variation */}
      <div className="border-t-[1.5px] border-[#111111] bg-[#F8F7F4] px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <nav className="hidden lg:flex items-center space-x-4 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`mono py-1.5 px-2 flex items-center space-x-1.5 text-xs transition-all cursor-pointer border-b-2 ${
                    isActive
                      ? 'border-[#CC0000] text-[#CC0000] font-bold'
                      : 'border-transparent text-[#111111] hover:border-[#CC0000] hover:text-[#CC0000]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1 py-0.2 font-mono font-bold ${
                      isActive 
                        ? 'bg-[#CC0000] text-white' 
                        : 'bg-[#EFEDE8] text-[#111111] border border-[#111111]/30'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Search & Actions */}
          <div className="flex items-center space-x-2 w-full lg:w-auto justify-between lg:justify-end">
            <div className="flex items-center relative flex-1 lg:flex-initial">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search dockets & evidence..."
                className="bg-white border border-[#111111] pl-7 pr-6 py-1 text-xs text-[#111111] placeholder-zinc-500 focus:outline-none focus:bg-[#CC0000]/5 focus:border-[#CC0000] w-full lg:w-56 transition-all font-mono"
              />
              <Search className="w-3 h-3 text-[#111111] absolute left-2" />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-2 text-zinc-500 hover:text-black text-xs font-bold cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => window.print()}
              title="Print Dossier"
              className="inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-mono font-bold uppercase bg-white hover:bg-[#CC0000] hover:text-white text-[#111111] border border-[#111111] transition-colors cursor-pointer shrink-0"
            >
              <Download className="w-3 h-3" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Admin Sign-In & Settings Link */}
            <button
              onClick={() => setShowAdminModal(true)}
              title={settings.isLoggedIn ? 'Admin Settings & Changes Active' : 'Sign in to make additions / edits'}
              className={`inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs font-mono font-bold uppercase border transition-colors cursor-pointer shrink-0 ${
                settings.isLoggedIn
                  ? 'bg-[#111111] text-[#FFE600] border-[#111111] shadow-xs'
                  : 'bg-white hover:bg-[#111111] hover:text-white text-[#111111] border-[#111111]'
              }`}
            >
              {settings.isLoggedIn ? (
                <>
                  <Unlock className="w-3 h-3 text-[#FFE600]" />
                  <span>Admin</span>
                </>
              ) : (
                <>
                  <Lock className="w-3 h-3" />
                  <span>Admin Sign-In</span>
                </>
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 text-[#111111] hover:bg-[#EFEDE8] bg-white border border-[#111111] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#111111] bg-[#EFEDE8] px-4 py-3 space-y-2">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider border cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#111111] border-[#111111] hover:bg-[#CC0000] hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.5 font-mono uppercase font-bold ${
                      isActive ? 'bg-[#CC0000] text-white' : 'bg-[#EFEDE8] text-[#111111]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
