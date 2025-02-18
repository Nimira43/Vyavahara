import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import ModeToggle from './ModeToggle'
import Link from 'next/link'
import { SignInButton, SignedIn, SignOutButton, SignedOut, UserButton } from '@clerk/nextjs'

export default function TopNav() {
  return (
    <Menubar>
      <div className="flex-none">
        <MenubarMenu>
          <Link href='/'>
            <h1 className='logo hover:cursor-pointer'>Vyavahara</h1>
          </Link>
        </MenubarMenu>
      </div>
      <div className="flex flex-grow item-center justify-end gap-1">
        <MenubarMenu>
          <MenubarTrigger className='text-base font-normal'>
            <Link href='/business/add'>Add Business</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className='text-base font-normal'>
            <Link href='/dashboard'>Dashboard</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MenubarMenu>
          <ModeToggle />
        </MenubarMenu>
      </div>
    </Menubar>
  )
}
