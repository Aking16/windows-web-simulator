import Taskbar from "@/components/layout/taskbar";
import Wallpaper from "@/components/layout/wallpaper";

export default function Home() {

  return (
    <div className="overflow-hidden">
      <Taskbar />
      <Wallpaper />
    </div>
  );
}
