import * as React from 'react'
import { Component } from 'react'
import { Button } from '@rmwc/button'
import { IconButton } from '@rmwc/icon-button'
import { Menu, MenuSurfaceAnchor, MenuItem } from '@rmwc/menu'
import { Typography } from '@rmwc/typography'

// TODO: create type for "value" and "options" props in Select component

type SelectProps = {
  options: string[]
}

type SelectState = {
  open: boolean
}

export class Select extends Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props)

    this.state = {
      open: false,
    }
  }

  render() {
    const { open } = this.state

    return (
      // TODO: extract this odc-menu to its own file
      <MenuSurfaceAnchor className="odc-menu">
        <Menu open={open} onClose={this.close}>
          {this.renderOptions()}
        </Menu>

        <Button dense onClick={this.open}>
          <Typography use="caption">10</Typography>
          <IconButton icon="arrow_drop_down" />
        </Button>
      </MenuSurfaceAnchor>
    )
  }

  private renderOptions = () =>
    this.props.options.map((o) => <MenuItem key={o}>{o}</MenuItem>)

  close = () => this.toggleMenu(false)

  open = () => this.toggleMenu(true)

  private toggleMenu = (open: boolean) => this.setState({ open })
}
