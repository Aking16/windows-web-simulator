"use client";

import { Button } from '@/components/ui/button';
import { useOpenContext } from '@/context/OpenProvider';
import { cn } from '@/lib/utils';
import { Minus, Square, X } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';

interface WindowsProps {
  children: React.ReactNode;
  appTitle: string;
  appIcon?: string;
}

const Windows: FC<WindowsProps> = ({ children, appTitle, appIcon }) => {
  const { openApps, closeApp, toggleApp, handleOrdinal } = useOpenContext();

  const [position, setPosition] = useState({ x: (openApps[appTitle].ordinal + 1) * 40, y: (openApps[appTitle].ordinal + 1) * 10 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleFullscreen = () => {
    setPosition({
      x: !isFullscreen ? 0 : 50,
      y: !isFullscreen ? 0 : 10
    });
    setFullscreen(prev => !prev);
  };

  return (
    <div
      className={cn("bg-background border z-40 relative", isFullscreen ? "w-screen !h-[calc(100%-3rem)]" : "w-[60vw] h-[45vw] rounded-lg")}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves the window
    >
      <div className="flex flex-row-reverse items-center">
        {/* Empty div so the handleOrdinal doesn't interfer with onClick events of the other button */}
        <div className="absolute left-0 top-0 w-[calc(100%-9rem)] h-9" onClick={() => handleOrdinal(appTitle)}></div>
        <Button
          variant="ghost"
          className={cn("w-12 rounded-none text-muted-foreground/80 hover:bg-destructive hover:text-primary-foreground", !isFullscreen && " rounded-tr-lg")}
          onClick={() => closeApp(appTitle)}>
          <X className="size-4" />
        </Button>
        <Button
          variant="ghost"
          className="w-12 rounded-none text-muted-foreground/80"
          onClick={handleFullscreen}>
          <Square className="size-3" />
        </Button>
        <Button
          variant="ghost"
          className="w-12 rounded-none text-muted-foreground/80"
          onClick={() => toggleApp(appTitle)}>
          <Minus className="size-4" />
        </Button>
        <div className="flex items-center me-auto ms-2 gap-2 text-muted-foreground">
          {appIcon && <Image width={50} height={50} src={appIcon} alt={`${appTitle} icon`} className="w-5 h-5" />}
          <p>{appTitle}</p>
        </div>
      </div>
      <div className="w-full h-[95.8%] rounded-b-lg">
        {children}
      </div>
    </div>
  );
};

export default Windows;