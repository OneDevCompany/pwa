import * as React from 'react';
import { Component } from 'react';
import { Link } from 'components/commons';
import { TopAppBar, TopAppBarNavigationButton } from 'components/ui';
import { Drawer, DrawerContent } from 'rmwc/Drawer';
import { ListItem, ListItemText } from 'rmwc/List';
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
};

type State = {
  drawerOpen: boolean,
};

export class Layout extends Component<LayoutProps, State> {
  static defaultProps: Partial<LayoutProps> = {
    appName: '',
  };

  state: State = {
    drawerOpen: false,
  };

  render() {
    const { appName } = this.props;
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
          <Toolbar>
            <ToolbarRow>
              <ToolbarTitle>{appName}</ToolbarTitle>
              <ToolbarSection alignEnd>
                <ToolbarIcon use="arrow_back" onClick={this.closeDrawer} />
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>

          <DrawerContent onClick={this.closeDrawer}>
            <Link href="/">
              <ListItem theme="on-secondary">
                <ListItemText>Home</ListItemText>
              </ListItem>
            </Link>
            <Link href="/other">
              <ListItem theme="on-secondary">
                <ListItemText>Other</ListItemText>
              </ListItem>
            </Link>
          </DrawerContent>
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
