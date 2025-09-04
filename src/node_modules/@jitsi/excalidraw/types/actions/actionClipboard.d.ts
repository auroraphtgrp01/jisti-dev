/// <reference types="react" />
export declare const actionCopy: {
    name: "copy";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: any, app: import("../types").AppClassProperties) => {
        commitToHistory: false;
    };
    contextItemLabel: string;
    keyTest: undefined;
} & {
    keyTest?: undefined;
};
export declare const actionCut: {
    name: "cut";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>, data: any, app: import("../types").AppClassProperties) => false | {
        elements: import("../types").ExcalidrawElement[];
        appState: {
            editingLinearElement: null;
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
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
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
    } | {
        elements: readonly import("../types").ExcalidrawElement[];
        appState: {
            editingLinearElement: {
                selectedPointsIndices: number[];
                startBindingElement: import("../types").ExcalidrawBindableElement | "keep" | null;
                endBindingElement: import("../types").ExcalidrawBindableElement | "keep" | null;
                elementId: string & {
                    _brand: "excalidrawLinearElementId";
                };
                pointerDownState: Readonly<{
                    prevSelectedPointsIndices: readonly number[] | null;
                    lastClickedPoint: number;
                }>;
                isDragging: boolean;
                lastUncommittedPoint: readonly [number, number] | null;
                pointerOffset: Readonly<{
                    x: number;
                    y: number;
                }>;
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
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
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
        commitToHistory: true;
    } | {
        elements: import("../types").ExcalidrawElement[];
        appState: {
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
            multiElement: null;
            selectedElementIds: {};
            isLoading: boolean;
            errorMessage: string | null;
            draggingElement: import("../types").NonDeletedExcalidrawElement | null;
            resizingElement: import("../types").NonDeletedExcalidrawElement | null;
            selectionElement: import("../types").NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            startBoundElement: import("../types").NonDeleted<import("../types").ExcalidrawBindableElement> | null;
            suggestedBindings: import("../element/binding").SuggestedBinding[];
            editingElement: import("../types").NonDeletedExcalidrawElement | null;
            editingLinearElement: import("../element/linearElementEditor").LinearElementEditor | null;
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
            previousSelectedElementIds: {
                [id: string]: boolean;
            };
            shouldCacheIgnoreZoom: boolean;
            showHelpDialog: boolean;
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
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
        commitToHistory: boolean;
    };
    contextItemLabel: string;
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionCopyAsSvg: {
    name: "copyAsSvg";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>, _data: any, app: import("../types").AppClassProperties) => Promise<{
        commitToHistory: false;
        appState?: undefined;
    } | {
        appState: {
            errorMessage: any;
            isLoading: boolean;
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
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
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
    }>;
    contextItemLabel: string;
} & {
    keyTest?: undefined;
};
export declare const actionCopyAsPng: {
    name: "copyAsPng";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>, _data: any, app: import("../types").AppClassProperties) => Promise<{
        commitToHistory: false;
        appState?: undefined;
    } | {
        appState: {
            errorMessage: any;
            isLoading: boolean;
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
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
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
    }>;
    contextItemLabel: string;
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const copyText: {
    name: "copyText";
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        commitToHistory: false;
    };
    contextItemPredicate: (elements: readonly import("../types").ExcalidrawElement[], appState: import("../types").AppState) => boolean;
    contextItemLabel: string;
} & {
    keyTest?: undefined;
};
