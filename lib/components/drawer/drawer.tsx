import { FC, HTMLProps, PropsWithChildren } from 'react'
import classnames from 'classnames'
import {
  Drawer as RmwcDrawer,
  DrawerContent,
  DrawerHeader,
  DrawerProps as RmwcDrawerProps,
  DrawerSubtitle,
  DrawerTitle,
} from '@rmwc/drawer'

type DrawerProps = HTMLProps<HTMLDivElement> &
  RmwcDrawerProps &
  PropsWithChildren<{
    title?: string
    subtitle?: string
  }>

export const Drawer: FC<DrawerProps> = ({
  className,
  children,
  title,
  subtitle,
  ...otherProps
}) => (
  <RmwcDrawer
    className={classnames('odc-drawer', className)}
    modal
    {...otherProps}
  >
    <DrawerHeader>
      <DrawerTitle>{title}</DrawerTitle>
      <DrawerSubtitle>{subtitle}</DrawerSubtitle>
      {/* <ToolbarSection alignEnd>
                <ToolbarIcon use="arrow_back" onClick={closeDrawer} />
              </ToolbarSection> */}
    </DrawerHeader>

    {!!children && <DrawerContent>{children}</DrawerContent>}
  </RmwcDrawer>
)
