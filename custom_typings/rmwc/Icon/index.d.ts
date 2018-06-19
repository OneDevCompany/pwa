import * as React from 'react';
import { SimpleTagProps } from '../Base';

// prettier-ignore
type IconStrategy = 'auto' | 'ligature' | 'className' | 'url' | 'component' | 'custom';

export type IconProps = {
  /** The icon to use. This can be a string for a font icon, a url, or whatever the selected strategy needs. */
  use?: React.ReactNode,
  /** The icon to use, specified as children instead of the "use" prop. */
  children?: React.ReactNode,
  /** Handle multiple methods of embedding an icon. 'ligature' uses ligature style embedding like material-icons, 'className' adds a class onto the element for libraries like glyphicons and ion icons, 'url' will load a remote image, and 'component' will render content as children like SVGs or any other React node. 'custom' allows you to specify your own render prop. If not set, 'auto' will be used or the defaults set inside of RMWCProvider. */
  strategy?: IconStrategy,
  /** A className prefix to use when using css font icons that use prefixes, i.e. font-awesome-, ion-, glyphicons-. This only applies when using the 'className' strategy. */
  prefix?: string,
  /** A base className for the icon namespace, i.e. material-icons. */
  basename?: string,
  /** A render function to use when using the 'custom' strategy. */
  render?: (content: {}) => React.ReactNode,
  /** A custom className to add.. */
  className?: string,
}

export type IconButtonProps = SimpleTagProps<HTMLButtonElement> & IconProps

/**
 * An Icon component. Most of these options can be set once globally, read the documentation on Provider for more info.
 */
export class Icon extends React.PureComponent<IconProps> { }

export default Icon;
