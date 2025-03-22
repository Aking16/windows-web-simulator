import React from 'react';
import Windows from '@/components/layout/windows';

const Chrome = () => {
  return (
    <Windows appTitle="Chrome" appIcon="./icons/chrome-icon.svg">
      <iframe src="https://www.google.com" className="w-full h-[95%] rounded-b-lg" />
    </Windows>
  );
};

export default Chrome;