"use client";

import { BookOpen, FolderClosed, Home, BotIcon as Robot, Brain } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Mlogo from '../../../public/assets/Logo.svg';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarHeader
} from "@/components/ui/sidebar"
import './AppSideBar.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation'




export function AppSidebar() {
  const router = useRouter();

  const pathname = usePathname()


  const handleNavigation = (path) => {
    router.push(path);
  };

  const getMenuItemClass = (path) => {
    return pathname === path ? 'menuItem active' : 'menuItem';
};


  return (
    <div className='sidebar-frame'>

    <div className='sidebar'>

      <div className="sidebar-header"  onClick={() => handleNavigation('/')}>
        <button className='sb-header-logo'>
          <Image src={Mlogo} alt='logo'/>
        </button> 
      </div >


      <div className='sb-menu'>

      <div className='menuBox'>
        <div className={getMenuItemClass('/home')} onClick={() => handleNavigation('/home')}>
            <Home />
        </div> 
        <div className='menuText'>
            <button onClick={() => handleNavigation('/home')}>Home</button>
        </div>
      </div>

      <div className='menuBox'>

          <div className={getMenuItemClass('/projects')} onClick={() => handleNavigation('/projects')}>
              <FolderClosed />
              
          </div>
          <div className='menuText'>
            <button onClick={() => handleNavigation('/projects')}>Projects</button>
          </div>

      </div>
      <div className='menuBox'>

          <div className={getMenuItemClass('/agent')}  onClick={() => handleNavigation('/agent')}>
              <Robot />
              
          </div>
          <div className='menuText'>
            <button onClick={() => handleNavigation('/agent')}>Agents</button>
          </div>

      </div>
      <div className='menuBox'>

          <div className={getMenuItemClass('/knowledge')}  onClick={() => handleNavigation('/knowledge')}>
              <Brain />
          </div>
          <div className='menuText' >
            <button onClick={() => handleNavigation('/knowledge')}>Knowledge</button>
          </div>

      </div>

      <div className='menuBox'>

          <div className={getMenuItemClass('/tutorials')}  onClick={() => handleNavigation('/tutorials')}>
              <BookOpen />
              
          </div>
          <div className='menuText'>
            <button onClick={() => handleNavigation('/tutotials')}>Tutorials</button>
          </div>

      </div>
    </div>

    </div>

    </div>
  )
}
