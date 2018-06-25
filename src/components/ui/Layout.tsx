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
};

type State = {
  drawerOpen: boolean,
};

export class Layout extends Component<LayoutProps, State> {
  static defaultProps: Partial<LayoutProps> = {
    appName: '',
    drawerContent: undefined,
  };

  state: State = {
    drawerOpen: false,
  };

  render() {
    const { appName, drawerContent } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className="odc-layout">
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarNavigationButton onClick={this.openDrawer} />
            <TopAppBarSection alignStart>
              <TopAppBarTitle>{appName}</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>

        <Drawer
          className="odc-drawer"
          open={drawerOpen}
          temporary
          onClose={this.closeDrawer}
        >
          <Toolbar className="odc-drawer__toolbar odc-toolbar">
            <ToolbarRow>
              <ToolbarTitle className="odc-drawer__app-name">{appName}</ToolbarTitle>
              <ToolbarSection alignEnd>
                <ToolbarIcon
                  className="odc-drawer__back-button"
                  use="arrow_back"
                  onClick={this.closeDrawer}
                />
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
