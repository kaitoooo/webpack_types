import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.init();
            },
            false
        );
        window.addEventListener('scroll', () => {});
    }
    init() {}
}
new App();
