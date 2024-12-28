import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import ModeToggle from './ModeToggle'

export default function TopNav() {
  return (
    <Menubar>
      <div className="flex-none">
        <MenubarMenu>Logo</MenubarMenu>
      </div>
    </Menubar>
  )
}
