import { CSSProperties } from 'react'

export type TableColumn = {
  header: string
  key: string
  noSort?: boolean
  style?: CSSProperties
}

export type Order = 'asc' | 'desc'

// TODO: refactor to:
// export type Ordering<T extends StringKeyValuePair> = {
//   order?: Order;
//   orderBy?: keyof T;
// };
export type Ordering = {
  order?: Order
  orderBy?: string
}

export type Query = Ordering
