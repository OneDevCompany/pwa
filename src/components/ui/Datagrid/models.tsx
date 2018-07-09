import { CSSProperties } from 'react';

export type DatagridTableColumn = {
  header: string;
  key: string;
  noSort?: boolean;
  style?: CSSProperties;
};

export type DatagridQuery = {
  order?: Order;
  orderBy?: string;
  page?: number;
  rowsPerPage?: number;
};

export type Order = 'asc' | 'desc';
