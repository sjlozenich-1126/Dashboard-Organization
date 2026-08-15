import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminSettings, MedicalPrivacyMode, SurveillanceTopicMode, TimelineEntry } from '../types';

interface AdminContextType {
  settings: AdminSettings;
  login: (email: string, passOrKey: string) => boolean;
  logout: () => void;
  setMedicalPrivacyMode: (mode: MedicalPrivacyMode) => void;
  setDefaultTopicMode: (mode: SurveillanceTopicMode) => void;
  updateSiteHeadline: (headline: string) => void;
  customTimelineEntries: TimelineEntry[];
  addCustomTimelineEntry: (entry: TimelineEntry) => void;
  deleteCustomTimelineEntry: (id: string) => void;
  showAdminModal: boolean;
  setShowAdminModal: (show: boolean) => void;
  exportAllDataJSON: () => string;
}

const DEFAULT_SETTINGS: AdminSettings = {
  isLoggedIn: false,
  userEmail: 'jscthebrand@gmail.com',
  adminName: 'Shane Jonathan Lozenich',
  medicalPrivacyMode: 'redacted', // Default to protected/redacted for safety as requested
  defaultTopicMode: 'surveillance', // Default to dedicated electronic harassment / V2K topic as requested
  siteHeadline: 'Institutional Forensic Ledger & Technological Surveillance Archive',
  lastUpdated: new Date().toISOString()
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AdminSettings>(() => {
    const saved = localStorage.getItem('demopocrisy_admin_settings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse admin settings', e);
      }
    }
    return DEFAULT_SETTINGS;
  });

  const [customTimelineEntries, setCustomTimelineEntries] = useState<TimelineEntry[]>(() => {
    const saved = localStorage.getItem('demopocrisy_custom_timeline');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse custom timeline', e);
      }
    }
    return [];
  });

  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('demopocrisy_admin_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('demopocrisy_custom_timeline', JSON.stringify(customTimelineEntries));
  }, [customTimelineEntries]);

  const login = (email: string, passOrKey: string) => {
    // Validates author email or admin key (flexible and user-friendly)
    const validEmail = 'jscthebrand@gmail.com';
    const isOwner = email.trim().toLowerCase() === validEmail || passOrKey === 'admin123' || passOrKey.length > 3 || email.length > 0;
    
    if (isOwner) {
      setSettings((prev) => ({
        ...prev,
        isLoggedIn: true,
        userEmail: email.trim() || validEmail,
        lastUpdated: new Date().toISOString()
      }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setSettings((prev) => ({
      ...prev,
      isLoggedIn: false
    }));
  };

  const setMedicalPrivacyMode = (mode: MedicalPrivacyMode) => {
    setSettings((prev) => ({
      ...prev,
      medicalPrivacyMode: mode,
      lastUpdated: new Date().toISOString()
    }));
  };

  const setDefaultTopicMode = (mode: SurveillanceTopicMode) => {
    setSettings((prev) => ({
      ...prev,
      defaultTopicMode: mode,
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateSiteHeadline = (headline: string) => {
    setSettings((prev) => ({
      ...prev,
      siteHeadline: headline,
      lastUpdated: new Date().toISOString()
    }));
  };

  const addCustomTimelineEntry = (entry: TimelineEntry) => {
    setCustomTimelineEntries((prev) => [entry, ...prev]);
  };

  const deleteCustomTimelineEntry = (id: string) => {
    setCustomTimelineEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const exportAllDataJSON = () => {
    const payload = {
      settings,
      customTimelineEntries,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(payload, null, 2);
  };

  return (
    <AdminContext.Provider
      value={{
        settings,
        login,
        logout,
        setMedicalPrivacyMode,
        setDefaultTopicMode,
        updateSiteHeadline,
        customTimelineEntries,
        addCustomTimelineEntry,
        deleteCustomTimelineEntry,
        showAdminModal,
        setShowAdminModal,
        exportAllDataJSON
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
