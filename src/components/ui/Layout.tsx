import * as React from 'react';
import { Component, ReactNode } from 'react';
import { TopAppBar, TopAppBarNavigationButton } from 'components/ui';
import { Drawer, DrawerContent } from 'rmwc/Drawer';
import {
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from 'rmwc/TopAppBar';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from 'rmwc/Toolbar';

export type LayoutProps = {
  appName?: string,
  drawerContent?: ReactNode,
  topAppBarRightElements?: ReactNode;
};

type State = {
  drawerOpen: boolean,
};

export class Layout extends Component<LayoutProps, State> {
  static defaultProps: Partial<LayoutProps> = {
    appName: '',
    drawerContent: undefined,
    topAppBarRightElements: undefined,
  };

  state: State = {
    drawerOpen: false,
  };

  render() {
    const { appName, children, drawerContent, topAppBarRightElements } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className="odc-layout">
        <div className="odc-layout__container">
          <TopAppBar>
            <TopAppBarRow>
              <TopAppBarNavigationButton onClick={this.openDrawer} />
              <TopAppBarSection alignStart>
                <TopAppBarTitle>{appName}</TopAppBarTitle>
              </TopAppBarSection>
              {!!topAppBarRightElements && (
                <TopAppBarSection alignEnd>{topAppBarRightElements}</TopAppBarSection>
              )}
            </TopAppBarRow>
          </TopAppBar>

          {children}
        </div>

        <Drawer
          className="odc-layout__main-drawer"
          open={drawerOpen}
          temporary
          onClose={this.closeDrawer}
        >
          <Toolbar>
            <ToolbarRow>
              <ToolbarTitle>{appName}</ToolbarTitle>
              <ToolbarSection alignEnd>
                <ToolbarIcon use="arrow_back" onClick={this.closeDrawer} />
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>

          {!!drawerContent && (
            <DrawerContent onClick={this.closeDrawer}>
              {drawerContent}
            </DrawerContent>
          )}
        </Drawer>
      </div>
    );
  }

  closeDrawer = () => this.toggleDrawer(false);

  openDrawer = () => this.toggleDrawer(true);

  toggleDrawer = (drawerOpen: boolean) => {
    this.setState({ drawerOpen });
  }
}
