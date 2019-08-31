export const helloWorldHeading = (): Element => {
    const pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Hello World!';

    return pageHeading;
}
