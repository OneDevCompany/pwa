import { Order } from 'components/ui';

export const toggleOrder = (order: Order): Order =>
  order === 'asc' ? 'desc' : 'asc';
