"use client";

import Chrome from "@/components/apps/chrome";
import Taskbar from "@/components/layout/taskbar";
import Wallpaper from "@/components/layout/wallpaper";
import { useOpenContext } from "@/context/OpenProvider";

export default function Home() {
  const { openApps } = useOpenContext();

  return (
    <div className="overflow-hidden">
      {openApps["Chrome"] && <Chrome />}
      <Taskbar />
      <Wallpaper />
    </div>
  );
}
