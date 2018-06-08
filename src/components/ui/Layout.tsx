import * as React from 'react';
import { Component, Fragment, SFC } from 'react';
import { AppBarProps } from '@material-ui/core/AppBar';
import {
  AppBar,
  createStyles,
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Theme,
  Toolbar,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';

console.log('TODO set theme colors');

const customColors = {
  button: {
    background: 'linear-gradient(#006dff, #0032ff)',
  },
  drawer: {
    background: 'linear-gradient(#006dff, #002de4)',
  },
  sidebar: {
    background: 'linear-gradient(#006dff 16.5%, #002de4 100%)',
  },
  text: {
    contrastColor: {
      primary: 'rgba(255,255,255,.87)',
      secondary: 'rgba(255,255,255,.60)',
    },
  },
};

const styles = (theme: Theme) => createStyles({
  drawerPaper: {
    background: customColors.drawer.background,
  },
  drawerTitle: {
    flex: 1,
    color: customColors.text.contrastColor.primary,
  },
  drawerCloseIcon: {
    color: customColors.text.contrastColor.secondary,
  },
  drawerCloseIconButton: {
    color: theme.palette.common.white,
  },
  drawerListItem: {
    width: 320,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  whiteText: {
    color: theme.palette.primary.main,
  },
});

export type LayoutExternalProps = {
  appBarTitle?: string,
} & AppBarProps;

type LayoutInternalProps = LayoutExternalProps & WithStyles<typeof styles>;

type State = {
  drawerOpen: boolean,
};

export class LayoutComponent extends Component<LayoutInternalProps, State> {
  static defaultProps: Partial<LayoutInternalProps> = {
    appBarTitle: '',
  };

  state: State = {
    drawerOpen: false,
  };

  render() {
    const { appBarTitle, classes } = this.props;
    const { drawerOpen } = this.state;

    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.toggleDrawer}
              aria-label="menu"
            >
              <Icon>menu</Icon>
            </IconButton>

            <Typography
              className={classes.flex}
              color="inherit"
              variant="title"
            >
              {appBarTitle}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          classes={{ paper: classes.drawerPaper }}
          open={drawerOpen}
          onClose={this.toggleDrawer}
        >
          <Toolbar>
            <Typography
              className={classes.drawerTitle}
              color="inherit"
              variant="title"
            >
              App Name
            </Typography>
            <IconButton
              classes={{ root: classes.drawerCloseIconButton }}
              onClick={this.toggleDrawer}
            >
              <Icon className={classes.drawerCloseIcon}>
                arrow_back
              </Icon>
            </IconButton>
          </Toolbar>

          <Divider />

          <List
            className={classes.drawerListItem}
            component="nav"
            onClick={this.toggleDrawer}
          >
            <ListItem
              button
              classes={{root: classes.drawerCloseIconButton}}
              component="a"
              href="#"
            >
              <ListItemText>Menu Item</ListItemText>
            </ListItem>
            <ListItem button component="a" href="#">
              <ListItemText>Menu Item</ListItemText>
            </ListItem>
          </List>

          <Divider />

          <List
            className={classes.drawerListItem}
            component="nav"
            onClick={this.toggleDrawer}
          >
            <ListItem button component="a" href="#">
              <ListItemText>Menu Item</ListItemText>
            </ListItem>
            <ListItem button component="a" href="#">
              <ListItemText>Menu Item</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Fragment>
    );
  }

  toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen });
}

export const Layout: SFC<LayoutExternalProps> = (withStyles as any)(styles)(LayoutComponent);
