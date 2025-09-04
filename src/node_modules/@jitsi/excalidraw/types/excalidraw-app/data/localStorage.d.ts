import { ExcalidrawElement } from "../../element/types";
export declare const saveUsernameToLocalStorage: (username: string) => void;
export declare const importUsernameFromLocalStorage: () => string | null;
export declare const importFromLocalStorage: () => {
    elements: ExcalidrawElement[];
    appState: {
        activeTool: {
            type: "line" | "arrow" | "text" | "selection" | "rectangle" | "diamond" | "ellipse" | "image" | "freedraw" | "eraser";
            lastActiveToolBeforeEraser: import("../../types").LastActiveToolBeforeEraser;
            locked: boolean;
            customType: null;
        } | {
            type: "custom";
            customType: string;
            lastActiveToolBeforeEraser: import("../../types").LastActiveToolBeforeEraser;
            locked: boolean;
        };
        scrollX: number;
        scrollY: number;
        viewBackgroundColor: string;
        zoom: Readonly<{
            value: import("../../types").NormalizedZoomValue;
        }>;
        shouldCacheIgnoreZoom: boolean;
        theme: string;
        penMode: boolean;
        penDetected: boolean;
        exportBackground: boolean;
        exportEmbedScene: boolean;
        exportWithDarkMode: boolean;
        exportScale: number;
        currentItemStrokeColor: string;
        currentItemBackgroundColor: string;
        currentItemFillStyle: import("../../types").FillStyle;
        currentItemStrokeWidth: number;
        currentItemStrokeStyle: import("../../types").StrokeStyle;
        currentItemRoughness: number;
        currentItemOpacity: number;
        currentItemFontFamily: number;
        currentItemFontSize: number;
        currentItemTextAlign: import("../../types").TextAlign;
        currentItemStrokeSharpness: import("../../types").StrokeSharpness;
        currentItemStartArrowhead: import("../../types").Arrowhead | null;
        currentItemEndArrowhead: import("../../types").Arrowhead | null;
        currentItemLinearStrokeSharpness: import("../../types").StrokeSharpness;
        cursorButton: "up" | "down";
        scrolledOutside: boolean;
        name: string;
        openMenu: "canvas" | "shape" | null;
        lastPointerDownWith: import("../../types").PointerType;
        selectedElementIds: {
            [id: string]: boolean;
        };
        previousSelectedElementIds: {
            [id: string]: boolean;
        };
        zenModeEnabled: boolean;
        gridSize: number | null;
        selectedGroupIds: {
            [groupId: string]: boolean;
        };
        editingGroupId: string | null;
        isLibraryOpen: boolean;
        isLibraryMenuDocked: boolean;
        showStats: boolean;
        currentChartType: import("../../types").ChartType;
        isLoading: boolean;
        errorMessage: string | null;
        draggingElement: import("../../types").NonDeletedExcalidrawElement | null;
        resizingElement: import("../../types").NonDeletedExcalidrawElement | null;
        multiElement: import("../../types").NonDeleted<import("../../types").ExcalidrawLinearElement> | null;
        selectionElement: import("../../types").NonDeletedExcalidrawElement | null;
        isBindingEnabled: boolean;
        startBoundElement: import("../../types").NonDeleted<import("../../types").ExcalidrawBindableElement> | null;
        suggestedBindings: import("../../element/binding").SuggestedBinding[];
        editingElement: import("../../types").NonDeletedExcalidrawElement | null;
        editingLinearElement: import("../../element/linearElementEditor").LinearElementEditor | null;
        isResizing: boolean;
        isRotating: boolean;
        openPopup: "canvasColorPicker" | "backgroundColorPicker" | "strokeColorPicker" | null;
        showHelpDialog: boolean;
        toast: {
            message: string;
            closable?: boolean | undefined;
            duration?: number | undefined;
        } | null;
        viewModeEnabled: boolean;
        fileHandle: import("browser-fs-access").FileSystemHandle | null;
        collaborators: Map<string, import("../../types").Collaborator>;
        pasteDialog: {
            shown: false;
            data: null;
        } | {
            shown: true;
            data: import("../../charts").Spreadsheet;
        };
        pendingImageElementId: string | null;
        showHyperlinkPopup: false | "info" | "editor";
    } | null;
};
export declare const getElementsStorageSize: () => number;
export declare const getTotalStorageSize: () => number;
export declare const getLibraryItemsFromStorage: () => import("../../types").LibraryItems_anyVersion;
