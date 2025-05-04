// 'use client'

// import { useEffect, useState } from 'react'
// import { PiSun, PiMoon } from 'react-icons/pi'
// import { useTheme } from 'next-themes'
// import { Button } from '@/components/ui/button'

// export default function ModeToggle() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if(!mounted) return null

//   const { theme, setTheme } = useTheme()

//   return (
//     <Button 
//       variant='link'
//       size='icon'
//       onClick={() => setTheme(
//         theme === 'dark' ? 'light' : 'dark'
//       )}
//     >
//       {theme === 'dark' 
//       ? <PiSun size={18} /> 
//       : <PiMoon size={18} />
//       }
//     </Button>
//   )
// }
'use client'

import { useEffect, useState } from 'react'
import { PiSun, PiMoon } from 'react-icons/pi'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false); // Always call useState first

  useEffect(() => {
    setMounted(true)
  }, [])

  const { theme, setTheme } = useTheme() // Ensure this is always called in the same order

  if (!mounted) return null // Early return after hooks are called

  return (
    <Button 
      className='text-main-light'
      variant="link"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <PiSun size={18} /> : <PiMoon size={18} />}
    </Button>
  )
}
