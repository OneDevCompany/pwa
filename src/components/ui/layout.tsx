import * as React from 'react'
import { FC, ReactNode, useState } from 'react'
import { TopAppBar, TopAppBarNavigationButton } from 'components/ui'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@rmwc/drawer'
import {
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar'
// import {
//   Toolbar,
//   ToolbarIcon,
//   ToolbarRow,
//   ToolbarSection,
//   ToolbarTitle,
// } from 'rmwc/Toolbar';

export type LayoutProps = {
  appName?: string
  drawerContent?: ReactNode
  topAppBarRightElements?: ReactNode
}

export const Layout: FC<LayoutProps> = ({
  children,
  appName,
  drawerContent,
  topAppBarRightElements,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <div className="odc-layout">
      <div className="odc-layout__container">
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarNavigationButton onClick={openDrawer} />

            <TopAppBarSection alignStart>
              <TopAppBarTitle>{appName}</TopAppBarTitle>
            </TopAppBarSection>

            {!!topAppBarRightElements && (
              <TopAppBarSection alignEnd>
                {topAppBarRightElements}
              </TopAppBarSection>
            )}
          </TopAppBarRow>
        </TopAppBar>

        {children}
      </div>

      <Drawer
        className="odc-drawer"
        open={drawerOpen}
        modal
        onClose={closeDrawer}
      >
        <DrawerHeader>
          <DrawerTitle>{appName}</DrawerTitle>
          {/* <ToolbarSection alignEnd>
                <ToolbarIcon use="arrow_back" onClick={closeDrawer} />
              </ToolbarSection> */}
        </DrawerHeader>

        {!!drawerContent && (
          <DrawerContent onClick={closeDrawer}>{drawerContent}</DrawerContent>
        )}
      </Drawer>
    </div>
  )
}
