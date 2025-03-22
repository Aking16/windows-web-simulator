import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const ShortcutButton = () => {
  return (
    <Button variant="ghost" size="icon" className="relative size-12">
      <Link href="https://github.com/Aking16/windows-web-simulator" target="_blank">
        <Image src="./icons/github-icon.svg" alt="Windows" width={46} height={46} />
        <ArrowUpRight className="bg-background absolute left-0 bottom-0" />
      </Link>
    </Button>
  );
};

export default ShortcutButton;