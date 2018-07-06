import * as React from 'react';
import { Component } from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import { Menu, MenuAnchor, MenuItem } from 'rmwc/Menu';
import { Typography } from 'rmwc/Typography';

// TODO: create type for "value" and "options" props in Select component

type SelectProps = {
  options: string[];
};

type SelectState = {
  open: boolean;
};

export class Select extends Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;

    return (
      <MenuAnchor className="odc-select">
        <Menu
          open={open}
          onClose={this.close}
        >
          {this.renderOptions()}
        </Menu>

        <Button dense onClick={this.open}>
          <Typography use="caption">10</Typography>
          <ButtonIcon use="arrow_drop_down" />
        </Button>
      </MenuAnchor>
    );
  }

  private renderOptions = () => this.props.options.map(o => (
    <MenuItem key={o}>{o}</MenuItem>
  ));

  close = () => this.toggleMenu(false);

  open = () => this.toggleMenu(true);

  private toggleMenu = (open: boolean) => this.setState({ open });
}
