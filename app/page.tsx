"use client";

import Chrome from "@/components/apps/chrome";
import VsCode from "@/components/apps/vscode";
import Activate from "@/components/layout/activate";
import Desktop from "@/components/layout/desktop";
import Taskbar from "@/components/layout/taskbar";
import Wallpaper from "@/components/layout/wallpaper";
import { useOpenContext } from "@/context/OpenProvider";

export default function Home() {
  const { openApps } = useOpenContext();

  // Sort apps by their ordinal value in descending order (most recently opened first)
  const sortedApps = Object.entries(openApps)
    .filter(([, appData]) => appData.isOpen) // Only include open apps
    .sort(([, a], [, b]) => a.ordinal - b.ordinal); // Sort by ordinal in descending order

  return (
    <div className="overflow-hidden">
      {sortedApps.map(([appName]) => {
        if (appName === "Chrome") return <Chrome key={appName} />;
        if (appName === "Visual Studio Code") return <VsCode key={appName} />;
        return null;
      })}
      <Desktop />
      <Activate />
      <Taskbar />
      <Wallpaper />
    </div>
  );
}