"use client";

import React, { createContext, useContext, useState } from "react";

interface OpenContextProps {
  openApps: Record<string, boolean>;
  openApp: (appName: string) => void;
  closeApp: (appName: string) => void;
  toggleApp: (appName: string) => void;
}

const OpenContext = createContext<OpenContextProps | undefined>(undefined);

export const OpenProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
  const [openApps, setOpenApps] = useState<Record<string, boolean>>({});

  const openApp = (appName: string) => {
    setOpenApps((prev) => ({ ...prev, [appName]: true }));
  };

  const closeApp = (appName: string) => {
    setOpenApps((prev) => ({ ...prev, [appName]: false }));
  };

  const toggleApp = (appName: string) => {
    setOpenApps((prev) => ({ ...prev, [appName]: !prev[appName] }));
  };

  return (
    <OpenContext.Provider value={{ openApps, openApp, closeApp, toggleApp }}>
      {children}
    </OpenContext.Provider>
  );
};

export const useOpenContext = () => {
  const context = useContext(OpenContext);
  if (!context) {
    throw new Error("useOpenContext must be used within an OpenProvider");
  }
  return context;
};