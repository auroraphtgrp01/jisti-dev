import { Observable, fromEvent } from 'rxjs';
/**
 * Creates an observable that tracks DOM mutations on the document body.
 */
export var createMutationObservable = function () {
    return new Observable(function (observer) {
        var mutationObserver = new MutationObserver(function (mutations) {
            observer.next(mutations);
        });
        mutationObserver.observe(document.body, {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true,
        });
        return function () { return mutationObserver.disconnect(); };
    });
};
/**
 * Creates an observable that tracks click events on the document.
 */
export var createClickObservable = function () {
    return fromEvent(document, 'click', { capture: true });
};
//# sourceMappingURL=observables.js.map