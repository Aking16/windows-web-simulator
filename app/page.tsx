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

  return (
    <div className="overflow-hidden">
      {openApps["Chrome"] && <Chrome />}
      {openApps["Visual Studio Code"] && <VsCode />}
      <Desktop />
      <Activate />
      <Taskbar />
      <Wallpaper />
    </div>
  );
}
