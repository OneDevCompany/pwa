import * as React from 'react'
import { FC, ReactNode, useState } from 'react'
import { Drawer, TopAppBar, TopAppBarNavigationButton } from '../'
import {
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar'

export type LayoutProps = {
  drawerTitle?: string
  drawerSubtitle?: string
  drawerContent?: ReactNode
  topAppBarTitle?: string
  topAppBarRightElements?: ReactNode
}

export const Layout: FC<LayoutProps> = ({
  children,
  drawerTitle,
  drawerSubtitle,
  drawerContent,
  topAppBarTitle,
  topAppBarRightElements,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <div className="odc-layout">
      <div className="container">
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarNavigationButton onClick={openDrawer} />

            {!!topAppBarTitle && (
              <TopAppBarSection alignStart>
                <TopAppBarTitle>{topAppBarTitle}</TopAppBarTitle>
              </TopAppBarSection>
            )}

            {!!topAppBarRightElements && (
              <TopAppBarSection alignEnd>
                {topAppBarRightElements}
              </TopAppBarSection>
            )}
          </TopAppBarRow>
        </TopAppBar>

        {children}
      </div>

      {/* TODO: extract this drawer to its own file */}
      <Drawer
        open={drawerOpen}
        title={drawerTitle}
        subtitle={drawerSubtitle}
        onClose={closeDrawer}
      >
        {drawerContent}
      </Drawer>
    </div>
  )
}
