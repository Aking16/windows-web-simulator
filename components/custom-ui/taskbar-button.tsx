import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { useOpenContext } from '@/context/OpenProvider';
import { motion } from "motion/react";
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TaskbarButtonProps {
  appName: string;
  appIcon: string;
}

const TaskbarButton: FC<TaskbarButtonProps> = ({ appName, appIcon }) => {
  const { openApps, toggleApp } = useOpenContext();

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className={cn("relative taskbar-button", openApps[appName] && "bg-muted")}
      onClick={() => toggleApp(appName)}
    >
      <motion.button
        whileTap={{
          scale: 0.1,
        }}
        transition={{ type: "spring", stiffness: 500 }}>
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full h-[3px] bg-accent"
          initial={{ width: "0px" }}
          animate={{ width: openApps[appName] ? "20px" : "0px" }}
          transition={{ duration: 0.2 }}
        />
        <Image width={30} height={30} src={appIcon} alt={`${appName} Icon`} />
      </motion.button>
    </Button>
  );
};

export default TaskbarButton;