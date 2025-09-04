import React from "react";
export declare const actionSendBackward: {
    name: "sendBackward";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: (import("../types").ExcalidrawLinearElement | import("../types").ExcalidrawSelectionElement | import("../types").ExcalidrawRectangleElement | import("../types").ExcalidrawDiamondElement | import("../types").ExcalidrawEllipseElement | import("../types").ExcalidrawImageElement | import("../types").ExcalidrawTextElement | import("../types").ExcalidrawFreeDrawElement)[];
        appState: Readonly<import("../types").AppState>;
        commitToHistory: true;
    };
    contextItemLabel: string;
    keyPriority: number;
    keyTest: (event: KeyboardEvent | React.KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | React.KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionBringForward: {
    name: "bringForward";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: (import("../types").ExcalidrawLinearElement | import("../types").ExcalidrawSelectionElement | import("../types").ExcalidrawRectangleElement | import("../types").ExcalidrawDiamondElement | import("../types").ExcalidrawEllipseElement | import("../types").ExcalidrawImageElement | import("../types").ExcalidrawTextElement | import("../types").ExcalidrawFreeDrawElement)[];
        appState: Readonly<import("../types").AppState>;
        commitToHistory: true;
    };
    contextItemLabel: string;
    keyPriority: number;
    keyTest: (event: KeyboardEvent | React.KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | React.KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionSendToBack: {
    name: "sendToBack";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("../types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        commitToHistory: true;
    };
    contextItemLabel: string;
    keyTest: (event: KeyboardEvent | React.KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | React.KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionBringToFront: {
    name: "bringToFront";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("../types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        commitToHistory: true;
    };
    contextItemLabel: string;
    keyTest: (event: KeyboardEvent | React.KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | React.KeyboardEvent<Element>) => boolean) | undefined;
};
