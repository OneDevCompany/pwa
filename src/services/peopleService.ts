import { getPeople } from '../pages/people/data';
import { Query } from 'components/ui';

export const fetchPeople = ({ order, orderBy }: Query = {}) => getPeople({
  ascending: order === 'asc' ? 1 : -1,
  sortBy: orderBy,
});
