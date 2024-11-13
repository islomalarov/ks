'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return theme === 'dark' ? (
    <Button className="z-10" size="sm" variant="outline" onClick={() => setTheme('light')}>
      <Sun />
    </Button>
  ) : (
    <Button className="z-10" size="sm" variant="outline" onClick={() => setTheme('dark')}>
      <Moon />
    </Button>
  );
}
