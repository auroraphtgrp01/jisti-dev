import { ElementInteractionsOptions, ActionType } from '@amplitude/analytics-core';
export type JSONValue = string | number | boolean | null | {
    [x: string]: JSONValue;
} | Array<JSONValue>;
export type shouldTrackEvent = (actionType: ActionType, element: Element) => boolean;
export declare const isElementPointerCursor: (element: Element, actionType: ActionType) => boolean;
export declare const createShouldTrackEvent: (autocaptureOptions: ElementInteractionsOptions, allowlist: string[], isAlwaysCaptureCursorPointer?: boolean) => shouldTrackEvent;
export declare const isNonSensitiveString: (text: string | null) => boolean;
export declare const isTextNode: (node: Node) => boolean;
export declare const isNonSensitiveElement: (element: Element) => boolean;
export declare const getText: (element: Element) => string;
export declare const isPageUrlAllowed: (url: string, pageUrlAllowlist: (string | RegExp)[] | undefined) => boolean;
export declare const getAttributesWithPrefix: (element: Element, prefix: string) => {
    [key: string]: string;
};
export declare const isEmpty: (value: unknown) => boolean;
export declare const removeEmptyProperties: (properties: {
    [key: string]: unknown;
}) => {
    [key: string]: unknown;
};
export declare const getNearestLabel: (element: Element) => string;
export declare const querySelectUniqueElements: (root: Element | Document, selectors: string[]) => Element[];
export declare const getClosestElement: (element: Element | null, selectors: string[]) => Element | null;
export declare const getEventTagProps: (element: Element) => {
    [key: string]: unknown;
};
export declare const asyncLoadScript: (url: string) => Promise<unknown>;
export declare function generateUniqueId(): string;
export declare const filterOutNonTrackableEvents: (event: ElementBasedTimestampedEvent<ElementBasedEvent>) => boolean;
export declare const getEventProperties: (actionType: ActionType, element: Element, dataAttributePrefix: string) => {
    [key: string]: unknown;
};
export type AutoCaptureOptionsWithDefaults = Required<Pick<ElementInteractionsOptions, 'debounceTime' | 'cssSelectorAllowlist' | 'actionClickAllowlist'>> & ElementInteractionsOptions;
export declare const addAdditionalEventProperties: <T>(event: T, type: "click" | "change" | "rage" | "error" | "navigate" | "mutation", selectorAllowlist: string[], dataAttributePrefix: string, isCapturingCursorPointer?: boolean) => TimestampedEvent<T>;
export type BaseTimestampedEvent<T> = {
    event: T;
    timestamp: number;
    type: 'rage' | 'click' | 'change' | 'error' | 'navigate' | 'mutation';
};
export type ElementBasedEvent = MouseEvent | Event;
export type ElementBasedTimestampedEvent<T> = BaseTimestampedEvent<T> & {
    event: MouseEvent | Event;
    type: 'click' | 'change';
    closestTrackedAncestor: Element;
    targetElementProperties: Record<string, any>;
};
export type evaluateTriggersFn = <T extends ElementBasedEvent>(event: ElementBasedTimestampedEvent<T>) => ElementBasedTimestampedEvent<T>;
export type TimestampedEvent<T> = BaseTimestampedEvent<T> | ElementBasedTimestampedEvent<T>;
export declare function isElementBasedEvent<T>(event: BaseTimestampedEvent<T>): event is ElementBasedTimestampedEvent<T>;
export interface NavigateEvent extends Event {
    readonly navigationType: 'reload' | 'push' | 'replace' | 'traverse';
    readonly destination: {
        readonly url: string;
        readonly key: string | null;
        readonly id: string | null;
        readonly index: number;
        readonly sameDocument: boolean;
        getState(): any;
    };
    readonly canIntercept: boolean;
    readonly userInitiated: boolean;
    readonly hashChange: boolean;
    readonly signal: AbortSignal;
    readonly formData: FormData | null;
    readonly downloadRequest: string | null;
    readonly info: any;
    readonly hasUAVisualTransition: boolean;
    /** @see https://github.com/WICG/navigation-api/pull/264 */
    readonly sourceElement: Element | null;
    scroll(): void;
}
//# sourceMappingURL=helpers.d.ts.map