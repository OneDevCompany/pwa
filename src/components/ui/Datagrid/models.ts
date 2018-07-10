import { CSSProperties } from 'react';

export type TableColumn = {
  header: string;
  key: string;
  noSort?: boolean;
  style?: CSSProperties;
};

export type Order = 'asc' | 'desc';

export type Ordering = {
  order?: Order;
  orderBy?: string;
};

export type Query = Ordering;
