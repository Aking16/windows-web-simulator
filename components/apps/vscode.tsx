import React from 'react';
import Windows from '@/components/layout/windows';

const VsCode = () => {
  return (
    <Windows appTitle="Visual Studio" appIcon="./icons/vscode-icon.svg">
      <iframe src="https://vscode.dev/" className="w-full h-[96%] rounded-b-lg" />
    </Windows>
  );
};

export default VsCode;