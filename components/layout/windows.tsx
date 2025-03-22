"use client";

import { Minus, Square, X } from 'lucide-react';
import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useOpenContext } from '@/context/OpenProvider';
import Image from 'next/image';

interface WindowsProps {
  children: React.ReactNode;
  appTitle: string;
  appIcon?: string;
}

const Windows: FC<WindowsProps> = ({ children, appTitle, appIcon }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const { closeApp, toggleApp } = useOpenContext();

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

  return (
    <div
      className="bg-background border w-[60rem] h-[45rem] rounded-lg"
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
        <Button
          variant="ghost"
          className="w-12 rounded-none text-muted-foreground/80 rounded-tr-lg hover:bg-destructive hover:text-primary-foreground"
          onClick={() => closeApp(appTitle)}>
          <X className="size-4" />
        </Button>
        <Button
          variant="ghost"
          className="w-12 rounded-none text-muted-foreground/80">
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
      {children}
    </div>
  );
};

export default Windows;