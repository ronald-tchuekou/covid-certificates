/**
 * Copyright (c) - 2021
 * @author Ronald Tchuekou
 */

/**
 * Set slide animations to an elements.
 * @type {{slideUp: DOMAnimation.slideUp, slideDown: DOMAnimation.slideDown, slideToggle: DOMAnimation.slideToggle}}
 */
let DOMAnimation = {
    /**
     * @param {HTMLElement} element
     * @param {number} duration
     */
    slideUp: (element, duration = 500) => {
        try {
            element.style.height = element.offsetHeight + 'px';
            element.style.transitionProperty = 'height, padding, margin';
            element.style.transitionDuration = duration + 'ms';
            element.offsetHeight; // Redraw
            element.style.overflow = 'hidden';
            element.style.height = '0';
            element.style.marginTop = '0';
            element.style.marginBottom = '0';
            element.style.paddingTop = '0';
            element.style.paddingBottom = '0';
            window.setTimeout(() => {
                element.style.display = 'none';
                element.style.removeProperty('height');
                element.style.removeProperty('overflow');
                element.style.removeProperty('margin-top');
                element.style.removeProperty('margin-bottom');
                element.style.removeProperty('padding-top');
                element.style.removeProperty('padding-bottom');
                element.style.removeProperty('transition-duration');
                element.style.removeProperty('transition-property');
            }, duration);
        } catch (e) {
            console.error(e.stack);
        }
    },
    /**
     * @param {HTMLElement} element
     * @param {number} duration
     */
    slideDown: (element, duration = 500) => {
        try {
            element.style.removeProperty('display');
            let display = window.getComputedStyle(element).display;
            element.style.display = display === 'none' ? 'block' : display; // Get default display value.
            let height = element.offsetHeight;
            element.style.overflow = 'hidden';
            element.style.height = '0';
            element.style.marginTop = '0';
            element.style.marginBottom = '0';
            element.style.paddingTop = '0';
            element.style.paddingBottom = '0';
            element.offsetHeight; // Redraw
            element.style.transitionProperty = 'height, padding, margin';
            element.style.transitionDuration = duration + 'ms';
            element.style.height = height + 'px';
            window.setTimeout(() => {
                element.style.removeProperty('height');
                element.style.removeProperty('overflow');
                element.style.removeProperty('margin-top');
                element.style.removeProperty('margin-bottom');
                element.style.removeProperty('padding-top');
                element.style.removeProperty('padding-bottom');
                element.style.removeProperty('transition-duration');
                element.style.removeProperty('transition-property');
            }, duration);
        } catch (e) {
            console.error(e.stack);
        }
    },
    /**
     * @param {HTMLElement} element
     * @param {number} duration
     */
    slideToggle: (element, duration = 500) => {
        let display = window.getComputedStyle(element).display;
        if (display === 'none') {
            DOMAnimation.slideDown(element, duration);
        } else DOMAnimation.slideUp(element, duration);
    },
};

export default DOMAnimation;
