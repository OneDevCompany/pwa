import * as React from 'react';
import { render } from 'react-dom';
import { App } from 'components';
import 'styles';

console.log('TODO', 'set theme colors');
console.log('TODO', 'split CSS code');
console.log('TODO', 'minify CSS in production');
console.log('TODO', '"optimization.splitChunks.name: false" does not render chunk files');

render(<App />, document.querySelector('#root'));
