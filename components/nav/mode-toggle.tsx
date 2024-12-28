'use client'

import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button 
      variant='link'
      size='icon'
      onClick={() => setTheme(
        theme === 'dark' ? 'light' : 'dark'
      )}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />
      }
    </Button>
  )
}
