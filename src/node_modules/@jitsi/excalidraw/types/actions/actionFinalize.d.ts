/// <reference types="react" />
import { LinearElementEditor } from "../element/linearElementEditor";
import { AppState } from "../types";
export declare const actionFinalize: {
    name: "finalize";
    trackEvent: false;
    perform: (elements: readonly import("../types").ExcalidrawElement[], appState: Readonly<AppState>, _: any, { canvas, focusContainer, scene }: import("../types").AppClassProperties) => {
        elements: import("../types").ExcalidrawElement[] | undefined;
        appState: {
            cursorButton: "up";
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
        elements: readonly import("../types").ExcalidrawElement[];
        appState: {
            cursorButton: "up";
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
            draggingElement: null;
            multiElement: null;
            editingElement: null;
            startBoundElement: null;
            suggestedBindings: never[];
            selectedElementIds: {
                [id: string]: boolean;
            };
            pendingImageElementId: null;
            isLoading: boolean;
            errorMessage: string | null;
            resizingElement: import("../types").NonDeletedExcalidrawElement | null;
            selectionElement: import("../types").NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            editingLinearElement: LinearElementEditor | null;
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
            showHyperlinkPopup: false | "info" | "editor";
        };
        commitToHistory: boolean;
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>, appState: AppState) => boolean;
    PanelComponent: ({ appState, updateData, data }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>, appState: AppState) => boolean) | undefined;
};
