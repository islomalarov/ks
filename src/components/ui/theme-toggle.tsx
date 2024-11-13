'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return theme === 'dark' ? (
    <Button className='z-10' variant="outline" onClick={() => setTheme('light')}>
      <span>
        <Sun />
      </span>
    </Button>
  ) : (
    <Button className='z-10' variant="outline" onClick={() => setTheme('dark')}>
      <span>
        {' '}
        <Moon />
      </span>
    </Button>
  );
}
