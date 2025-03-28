import Image from 'next/image';
import React from 'react';

const Wallpaper = () => {
  return (
    <div className="fixed top-0 left-0 -z-50">
      <Image
        width={1920}
        height={1080}
        aria-disabled
        src="./wallpapers/white-theme-1.webp"
        alt="white theme wallpaper"
        className="w-screen h-screen object-cover" />
    </div>
  );
};

export default Wallpaper;