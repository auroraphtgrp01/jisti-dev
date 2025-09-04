/// <reference types="react" />
export declare let copiedStyles: string;
export declare const actionCopyStyles: {
    name: "copyStyles";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        appState: {
            toast: {
                message: string;
            };
            isLoading: boolean;
            errorMessage: string | null;
            draggingElement: import("../types").NonDeletedExcalidrawElement | null;
            resizingElement: import("../types").NonDeletedExcalidrawElement | null;
            multiElement: import("../types").NonDeleted<import("../types").ExcalidrawLinearElement> | null;
            selectionElement: import("../types").NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            startBoundElement: import("../types").NonDeleted<import("../types").ExcalidrawBindableElement> | null;
            suggestedBindings: import("../element/binding").SuggestedBinding[];
            editingElement: import("../types").NonDeletedExcalidrawElement | null;
            editingLinearElement: import("../element/linearElementEditor").LinearElementEditor | null;
            activeTool: {
                type: "line" | "arrow" | "text" | "selection" | "rectangle" | "diamond" | "ellipse" | "image" | "freedraw" | "eraser";
                lastActiveToolBeforeEraser: import("../types").LastActiveToolBeforeEraser;
                locked: boolean;
                customType: null;
            } | {
                type: "custom";
                customType: string;
                lastActiveToolBeforeEraser: import("../types").LastActiveToolBeforeEraser;
                locked: boolean;
            };
            penMode: boolean;
            penDetected: boolean;
            exportBackground: boolean;
            exportEmbedScene: boolean;
            exportWithDarkMode: boolean;
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: import("../types").FillStyle;
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: import("../types").StrokeStyle;
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: number;
            currentItemFontSize: number;
            currentItemTextAlign: import("../types").TextAlign;
            currentItemStrokeSharpness: import("../types").StrokeSharpness;
            currentItemStartArrowhead: import("../types").Arrowhead | null;
            currentItemEndArrowhead: import("../types").Arrowhead | null;
            currentItemLinearStrokeSharpness: import("../types").StrokeSharpness;
            viewBackgroundColor: string;
            scrollX: number;
            scrollY: number;
            cursorButton: "up" | "down";
            scrolledOutside: boolean;
            name: string;
            isResizing: boolean;
            isRotating: boolean;
            zoom: Readonly<{
                value: import("../types").NormalizedZoomValue;
            }>;
            openMenu: "canvas" | "shape" | null;
            openPopup: "canvasColorPicker" | "backgroundColorPicker" | "strokeColorPicker" | null;
            lastPointerDownWith: import("../types").PointerType;
            selectedElementIds: {
                [id: string]: boolean;
            };
            previousSelectedElementIds: {
                [id: string]: boolean;
            };
            shouldCacheIgnoreZoom: boolean;
            showHelpDialog: boolean;
            zenModeEnabled: boolean;
            theme: string;
            gridSize: number | null;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: string | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            isLibraryOpen: boolean;
            isLibraryMenuDocked: boolean;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            collaborators: Map<string, import("../types").Collaborator>;
            showStats: boolean;
            currentChartType: import("../types").ChartType;
            pasteDialog: {
                shown: false;
                data: null;
            } | {
                shown: true;
                data: import("../charts").Spreadsheet;
            };
            pendingImageElementId: string | null;
            showHyperlinkPopup: false | "info" | "editor";
        };
        commitToHistory: false;
    };
    contextItemLabel: string;
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionPasteStyles: {
    name: "pasteStyles";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("../types").ExcalidrawElement[];
        commitToHistory: false;
    } | {
        elements: import("../types").ExcalidrawElement[];
        commitToHistory: true;
    };
    contextItemLabel: string;
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
