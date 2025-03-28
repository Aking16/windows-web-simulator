import React from 'react';
import Windows from '@/components/layout/windows';

const Chrome = () => {
  return (
    <Windows appTitle="Chrome" appIcon="./icons/chrome-icon.svg">
      <iframe src="https://www.google.com/search" className="w-full h-full" />
    </Windows>
  );
};

export default Chrome;