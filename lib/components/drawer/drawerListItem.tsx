import * as React from 'react'
import { FC } from 'react'
import { ListItem, ListItemText } from '@rmwc/list'

// const links = [
//   { href: '/', text: 'Home' },
//   { href: '/other', text: 'Other' },
// ]

type DrawerListItem = {
  text: string
}

export const DrawerListItem: FC<DrawerListItem> = ({ text }) => (
  <ListItem>
    <ListItemText>{text}</ListItemText>
  </ListItem>
)
