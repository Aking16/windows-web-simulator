"use client";

import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface AppType {
  isOpen: boolean;
  ordinal: number; // Ordinal to track the order of the app
}

interface OpenContextProps {
  openApps: Record<string, AppType>;
  setOpenApps: Dispatch<SetStateAction<Record<string, AppType>>>;
  openApp: (appName: string) => void;
  closeApp: (appName: string) => void;
  toggleApp: (appName: string) => void;
  ordinal: number;
  setOrdinal: Dispatch<SetStateAction<number>>;
}

const OpenContext = createContext<OpenContextProps | undefined>(undefined);

export const OpenProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
  const [openApps, setOpenApps] = useState<Record<string, AppType>>({});
  const [ordinal, setOrdinal] = useState<number>(0);

  const openApp = (appName: string) => {
    setOpenApps((prev) => ({
      ...prev,
      [appName]: { isOpen: true, ordinal: ordinal }
    }));
    setOrdinal(prev => prev + 1);
  };

  const closeApp = (appName: string) => {
    setOpenApps((prev) => ({
      ...prev,
      [appName]: { ...prev[appName], isOpen: false },
    }));
    setOrdinal(prev => prev - 1);
  };


  const toggleApp = (appName: string) => {
    setOpenApps((prev) => {
      const isCurrentlyOpen = prev[appName]?.isOpen || false;
      return {
        ...prev,
        [appName]: {
          isOpen: !isCurrentlyOpen,
          ordinal: isCurrentlyOpen ? prev[appName].ordinal : ordinal,
        },
      };
    });
    setOrdinal((prev) => prev + 1); // Increment the ordinal counter only when opening
  };

  return (
    <OpenContext.Provider value={{ openApps, setOpenApps, openApp, closeApp, toggleApp, ordinal, setOrdinal }}>
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