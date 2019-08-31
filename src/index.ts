import {
    helloWorldHeading
} from './ts/functions/hello-world-heading';

import './scss/main.scss';

console.log('Hello World');

const firstScript: Element = document.body.querySelector('script');

document.body.insertBefore(helloWorldHeading(), firstScript);
