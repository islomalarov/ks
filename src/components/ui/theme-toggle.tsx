'use client';

import { Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import SunIcon from './sun';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return resolvedTheme === 'dark' ? (
    <Button className="z-10" size="sm" variant="outline" onClick={() => setTheme('light')}>
      <SunIcon />
    </Button>
  ) : (
    <Button className="z-10" size="sm" variant="outline" onClick={() => setTheme('dark')}>
      <Moon />
    </Button>
  );
}
