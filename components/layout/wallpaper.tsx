import Image from 'next/image';
import React from 'react';

const Wallpaper = () => {
  return (
    <div className="fixed top-0 left-0 -z-50">
      <Image width={1920} height={1080} src="./wallpapers/white-theme-1.webp" alt="white theme wallpaper" />
    </div>
  );
};

export default Wallpaper;