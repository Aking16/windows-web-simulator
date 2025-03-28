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
  handleOrdinal: (appName: string) => void;
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
    console.log(openApps);

    setOpenApps((prev) => ({
      ...prev,
      [appName]: { isOpen: false, ordinal: 0 },
    }));
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

  const handleOrdinal = (appName: string) => {
    setOrdinal(prev => prev + 1);
    setOpenApps((prev) => ({
      ...prev,
      [appName]: {
        isOpen: true,
        ordinal: ordinal,
      },
    }));
  };

  return (
    <OpenContext.Provider value={{ openApps, setOpenApps, openApp, closeApp, toggleApp, handleOrdinal }}>
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