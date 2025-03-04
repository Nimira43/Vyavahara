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
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { HiPlus } from 'react-icons/hi'
import { BiLogInCircle } from 'react-icons/bi'
import { currentUser } from '@clerk/nextjs/server'

export default async function TopNav() {
  const user = await currentUser()

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
            <Link href='/business/add'>
              <span className='flex items-center'>
                <HiPlus size={16} className='mr-2 text-primary' />  
                <span>Add Business</span>
              </span>
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        
        {user && (
          <MenubarMenu>
            <MenubarTrigger className='text-base font-normal'>
              <Link href='/dashboard'>
                <span className='flex items-center'>
                  <MdOutlineSpaceDashboard size={16} className='mr-2 text-primary' />  
                  <span>Dashboard</span>
                </span>
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        )}
               
        <SignedOut>
          <span className='flex items-center'>
            <BiLogInCircle size={16} className='mr-2 text-primary' />
          </span>
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
