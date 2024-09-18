import React from 'react'
import {Sidebar, SidebarMahasiswa} from './Sidebar'
import {MobilePanel, MobilePanelMahasiswa } from './MobilePanel'

export const Aside = ({IsMobile,active}) => {
  
  return (
   <>
      <aside>
        {/* desktop width */}
        {IsMobile > 1024 && <Sidebar active={active} />}
        {/* mobile width */}
        {IsMobile < 1024 && <MobilePanel />}
      </aside>
   </>
  )
}
export const AsideMahasiswa = ({IsMobile,active}) => {
  
  return (
   <>
      <aside  >
        {/* desktop width */}
        {IsMobile > 1024 && <SidebarMahasiswa active={active} />}
        {/* mobile width */}
        {IsMobile < 1024 && <MobilePanelMahasiswa />}
      </aside>
   </>
  )
}
