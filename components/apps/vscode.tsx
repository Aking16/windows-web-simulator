import React from 'react';
import Windows from '@/components/layout/windows';

const VsCode = () => {
  return (
    <Windows appTitle="Visual Studio Code" appIcon="./icons/vscode-icon.svg">
      <iframe src="https://vscode.dev/" className="w-full h-full" />
    </Windows>
  );
};

export default VsCode;;