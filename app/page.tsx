import ModeToggle from '@/components/nav/mode-toggle'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='logo'>Vyavahara</h1>
      <ModeToggle />    
    </div>
  )
}

