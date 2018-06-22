import * as React from 'react';
import { SimpleTagProps } from '../Base';

export type TypographyProps = {
  /* prettier-ignore */
  /** The typography style.*/
  use: 'headline1' | 'headline2' | 'headline3' | 'headline4' | 'headline5' | 'headline6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'
} & SimpleTagProps<HTMLSpanElement>

/**
 * The Typography Component
 */
export class Typography extends React.Component<TypographyProps> { }
