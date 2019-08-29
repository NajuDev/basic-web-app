import {
    helloWorldHeading
} from './js/functions/hello-world-heading';

import './scss/main.scss';

console.log('Hello World');

const firstScript = document.body.querySelector('script');

document.body.insertBefore(helloWorldHeading(), firstScript);
