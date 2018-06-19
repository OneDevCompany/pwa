import * as React from 'react';
import { Component, Fragment } from 'react';
// import equal from 'fast-deep-equal';
import { Drawer, DrawerContent } from 'rmwc/Drawer';
import { Icon } from 'rmwc/Icon';
import { ListItem, ListItemText } from 'rmwc/List';
import { Ripple } from 'rmwc/Ripple';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
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

// const styles = (theme: Theme) => createStyles({
//   drawerPaper: {
//     background: customColors.drawer.background,
//   },
//   drawerTitle: {
//     flex: 1,
//     color: customColors.text.contrastColor.primary,
//   },
//   drawerCloseIcon: {
//     color: customColors.text.contrastColor.secondary,
//   },
//   drawerCloseIconButton: {
//     color: theme.palette.common.white,
//   },
//   drawerListItem: {
//     width: 320,
//   },
//   flex: {
//     flex: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
//   whiteText: {
//     color: theme.palette.primary.main,
//   },
// });

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
    const { appTitle } = this.props;
    const { drawerOpen } = this.state;

    return (
      <Fragment>
        <TopAppBar className="odc-top-app-bar">
          <TopAppBarRow>
            <Ripple>
              <div className="odc-square-button" onClick={this.toggleDrawer(true)}>
                <Icon use="menu" />
              </div>
            </Ripple>
            <TopAppBarSection alignStart>
              <TopAppBarTitle>{appTitle}</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <Drawer
          className="odc-drawer"
          open={drawerOpen}
          temporary
          onClose={this.toggleDrawer(false)}
        >
          {/* <DrawerHeader>{appBarTitle}</DrawerHeader> */}
          <Toolbar>
            <ToolbarRow>
              <ToolbarTitle>{appTitle}</ToolbarTitle>
              <ToolbarSection alignEnd>
                <ToolbarIcon use="arrow_back" onClick={this.toggleDrawer(false)} />
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>

          <DrawerContent>
            <ListItem theme="on-secondary">
              <ListItemText>Cookies</ListItemText>
            </ListItem>
            <ListItem theme="on-secondary">
              <ListItemText>Pizza</ListItemText>
            </ListItem>
            <ListItem theme="on-secondary">
              <ListItemText>Icecream</ListItemText>
            </ListItem>
          </DrawerContent>
        </Drawer>
      </Fragment>
    );
  }

  toggleDrawer = (drawerOpen: boolean) => () => {
    console.log(drawerOpen);
    this.setState({ drawerOpen });
  }
}
