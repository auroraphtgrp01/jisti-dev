import { Observable } from 'rxjs';
/**
 * Creates an observable that tracks DOM mutations on the document body.
 */
export declare const createMutationObservable: () => Observable<MutationRecord[]>;
/**
 * Creates an observable that tracks click events on the document.
 */
export declare const createClickObservable: () => Observable<MouseEvent>;
//# sourceMappingURL=observables.d.ts.map