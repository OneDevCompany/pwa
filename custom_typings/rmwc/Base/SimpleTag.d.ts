import * as React from 'react';

export type SimpleTagProps<T> = {
  tag?: string | React.ComponentType<any>,
  wrap?: boolean,
  elementRef?: React.Ref<T>,
  theme?: string | string[],
} & React.HTMLProps<T>

export class SimpleTag<T> extends React.Component<SimpleTagProps<T>> { }
