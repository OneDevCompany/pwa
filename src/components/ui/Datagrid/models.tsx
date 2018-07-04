import { CSSProperties } from 'react';

export type DatagridTableColumn = {
  header: string;
  key: string;
  noSort?: boolean;
  style?: CSSProperties;
};

export type Order = 'asc' | 'desc';
