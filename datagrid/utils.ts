import { Order } from 'components'

export const toggleOrder = (order: Order): Order =>
  order === 'asc' ? 'desc' : 'asc'
