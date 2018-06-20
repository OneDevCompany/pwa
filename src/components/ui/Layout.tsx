import * as React from 'react';
import { Component, Fragment } from 'react';
// import Link from 'next/link';
import { Link } from 'components/commons';
// import equal from 'fast-deep-equal';
import { Drawer, DrawerContent } from 'rmwc/Drawer';
import { Icon } from 'rmwc/Icon';
import { ListItem, ListItemText } from 'rmwc/List';
import { Ripple } from 'rmwc/Ripple';
import {
  TopAppBar,
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

// const customColors = {
//   button: {
//     background: 'linear-gradient(#006dff, #0032ff)',
//   },
//   drawer: {
//     background: 'linear-gradient(#006dff, #002de4)',
//   },
//   sidebar: {
//     background: 'linear-gradient(#006dff 16.5%, #002de4 100%)',
//   },
//   text: {
//     contrastColor: {
//       primary: 'rgba(255,255,255,.87)',
//       secondary: 'rgba(255,255,255,.60)',
//     },
//   },
// };

export type LayoutProps = {
  appTitle?: string,
};

type State = {
  drawerOpen: boolean,
};

export class Layout extends Component<LayoutProps, State> {
  static defaultProps: Partial<LayoutProps> = {
    appTitle: '',
  };

  state: State = {
    drawerOpen: false,
  };

  // shouldComponentUpdate(nextProps: LayoutProps, nextState: State) {
  //   return !equal(this.state, nextState);
  // }

  render() {
    const { appTitle, children } = this.props;
    const { drawerOpen } = this.state;

    return (
      <Fragment>
        <TopAppBar className="odc-top-app-bar">
          <TopAppBarRow>
            <Ripple>
              <div className="odc-square-button" onClick={this.openDrawer}>
                <Icon use="menu" />
              </div>
            </Ripple>
            <TopAppBarSection alignStart>
              <TopAppBarTitle>{appTitle}</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>

        {children}

        <Drawer
          className="odc-drawer"
          open={drawerOpen}
          temporary
          onClose={this.closeDrawer}
        >
          <Toolbar>
            <ToolbarRow>
              <ToolbarTitle>{appTitle}</ToolbarTitle>
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
      </Fragment>
    );
  }

  closeDrawer = () => this.toggleDrawer(false);

  openDrawer = () => this.toggleDrawer(true);

  toggleDrawer = (drawerOpen: boolean) => {
    this.setState({ drawerOpen });
  }
}
