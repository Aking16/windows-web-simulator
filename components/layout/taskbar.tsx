import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Bell, ChevronUp } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Taskbar = () => {
  const date = new Date();

  return (
    <div className="fixed bottom-0 left-0 flex items-center w-full border-t py-2">
      <div className="mx-auto space-x-1">
        <Button variant="ghost" size="icon">
          <Image width={30} height={30} src="./icons/start-icon.svg" alt="start icon" />
        </Button>
        <Button variant="ghost" size="icon">
          <Image width={30} height={30} src="./icons/calculator-icon.png" alt="calculator icon" />
        </Button>
        <Button variant="ghost" size="icon">
          <Image width={30} height={30} src="./icons/chrome-icon.svg" alt="chrome icon" />
        </Button>
        <Button variant="ghost" size="icon">
          <Image width={30} height={30} src="./icons/vscode-icon.svg" alt="visual studio icon" />
        </Button>
      </div>
      <div className="flex flex-row-reverse items-center">
        <Button variant="ghost" className="me-2">
          <div className="text-end text-xs">
            <p>
              {new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              }).format(date)}
            </p>
            <p>
              {new Intl.DateTimeFormat('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              }).format(date)}
            </p>
          </div>
          <Bell />
        </Button>
        <Popover>
          <PopoverTrigger asChild className="transition-all [&[data-state=open]>svg]:rotate-180">
            <Button variant="ghost" size="icon">
              <ChevronUp className="size-5 transition-transform duration-200 delay-100" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className=" w-fit">
            <Button variant="ghost" size="icon">
              <Image width={30} height={30} src="./icons/vscode-icon.svg" alt="visual studio icon" />
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div >
  );
};

export default Taskbar;