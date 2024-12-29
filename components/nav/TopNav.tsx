import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import ModeToggle from './ModeToggle'
// import Image from 'next/image'
import Link from 'next/link'

export default function TopNav() {
  return (
    <Menubar>
      <div className="flex-none">
        <MenubarMenu>
          {/* <Image src='/logo2.svg' alt='logo' width={50} height='50' /> */}
          <Link href='/'>
            <h1 className='logo hover:cursor-pointer'>Vyavahara</h1>
          </Link>
        </MenubarMenu>
      </div>
      <div className="flex flex-grow item-center justify-end gap-1">
        <MenubarMenu>
          <MenubarTrigger className='text-base font-normal'>
            Dashboard
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Job 1</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Job 2</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <ModeToggle />
        </MenubarMenu>
      </div>
    </Menubar>
  )
}
