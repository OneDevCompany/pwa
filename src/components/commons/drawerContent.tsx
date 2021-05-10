import * as React from 'react'
import Link from 'next/link'
import { Fragment, FC } from 'react'
import { ListItem, ListItemText } from '@rmwc/list'
import { useRouter } from 'next/router'

const links = [
  { href: '/', text: 'Home' },
  { href: '/other', text: 'Other' },
]

export const DrawerContent: FC = () => {
  const { pathname } = useRouter()

  return (
    <Fragment>
      {links.map(({ href, text }) => (
        <Link key={href} href={href}>
          <ListItem
            activated={isActive(href, pathname)}
            // theme="on-secondary"
          >
            <ListItemText>{text}</ListItemText>
          </ListItem>
        </Link>
      ))}
    </Fragment>
  )
}

function isActive(href: string, currentRoute: string) {
  return currentRoute === href
}
