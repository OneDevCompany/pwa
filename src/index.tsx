import * as React from 'react';
import { render } from 'react-dom';
import { App } from 'components';

// console.warn('TODO', 'split CSS code');
// console.warn('TODO', 'minify CSS in production');
console.warn('TODO', '"optimization.splitChunks.name: false" does not render chunk files');
// console.warn('TODO', 'favicon not working');

render(<App />, document.querySelector('#root'));
