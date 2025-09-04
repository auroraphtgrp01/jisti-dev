"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClickObservable = exports.createMutationObservable = void 0;
var rxjs_1 = require("rxjs");
/**
 * Creates an observable that tracks DOM mutations on the document body.
 */
var createMutationObservable = function () {
    return new rxjs_1.Observable(function (observer) {
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
exports.createMutationObservable = createMutationObservable;
/**
 * Creates an observable that tracks click events on the document.
 */
var createClickObservable = function () {
    return (0, rxjs_1.fromEvent)(document, 'click', { capture: true });
};
exports.createClickObservable = createClickObservable;
//# sourceMappingURL=observables.js.map