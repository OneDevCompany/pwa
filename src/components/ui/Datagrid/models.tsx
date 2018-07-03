import { CSSProperties } from 'react';

export type DatagridTableColumn = {
  header: string;
  key: string;
  style?: CSSProperties;
};

export type Order = 'asc' | 'desc';
