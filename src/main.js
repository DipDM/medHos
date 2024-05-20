import './private/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')



const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;
const speed = 1.5; 

function setupIntersectionObserver(element, isLTR) {
    if (!element) {
        console.error('Element not found');
        return;
    }

    const scrollHandler = () => {
        const boundingRect = element.getBoundingClientRect();
        const translateX = (window.innerHeight - boundingRect.top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    };

    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);
}

document.addEventListener('DOMContentLoaded', () => {
    const line4 = document.getElementById('line4');
    setupIntersectionObserver(line4, true);
});