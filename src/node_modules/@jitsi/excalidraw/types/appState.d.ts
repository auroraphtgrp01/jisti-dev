import { AppState, NormalizedZoomValue } from "./types";
export declare const getDefaultAppState: () => Omit<AppState, "offsetTop" | "offsetLeft" | "width" | "height">;
export declare const clearAppStateForLocalStorage: (appState: Partial<AppState>) => {
    activeTool?: {
        type: "line" | "arrow" | "text" | "selection" | "rectangle" | "diamond" | "ellipse" | "image" | "freedraw" | "eraser";
        lastActiveToolBeforeEraser: import("./types").LastActiveToolBeforeEraser;
        locked: boolean;
        customType: null;
    } | {
        type: "custom";
        customType: string;
        lastActiveToolBeforeEraser: import("./types").LastActiveToolBeforeEraser;
        locked: boolean;
    } | undefined;
    scrollX?: number | undefined;
    scrollY?: number | undefined;
    viewBackgroundColor?: string | undefined;
    zoom?: Readonly<{
        value: NormalizedZoomValue;
    }> | undefined;
    shouldCacheIgnoreZoom?: boolean | undefined;
    theme?: string | undefined;
    penMode?: boolean | undefined;
    penDetected?: boolean | undefined;
    exportBackground?: boolean | undefined;
    exportEmbedScene?: boolean | undefined;
    exportWithDarkMode?: boolean | undefined;
    exportScale?: number | undefined;
    currentItemStrokeColor?: string | undefined;
    currentItemBackgroundColor?: string | undefined;
    currentItemFillStyle?: import("./types").FillStyle | undefined;
    currentItemStrokeWidth?: number | undefined;
    currentItemStrokeStyle?: import("./types").StrokeStyle | undefined;
    currentItemRoughness?: number | undefined;
    currentItemOpacity?: number | undefined;
    currentItemFontFamily?: number | undefined;
    currentItemFontSize?: number | undefined;
    currentItemTextAlign?: import("./types").TextAlign | undefined;
    currentItemStrokeSharpness?: import("./types").StrokeSharpness | undefined;
    currentItemStartArrowhead?: import("./types").Arrowhead | null | undefined;
    currentItemEndArrowhead?: import("./types").Arrowhead | null | undefined;
    currentItemLinearStrokeSharpness?: import("./types").StrokeSharpness | undefined;
    cursorButton?: "up" | "down" | undefined;
    scrolledOutside?: boolean | undefined;
    name?: string | undefined;
    openMenu?: "canvas" | "shape" | null | undefined;
    lastPointerDownWith?: import("./types").PointerType | undefined;
    selectedElementIds?: {
        [id: string]: boolean;
    } | undefined;
    previousSelectedElementIds?: {
        [id: string]: boolean;
    } | undefined;
    zenModeEnabled?: boolean | undefined;
    gridSize?: number | null | undefined;
    selectedGroupIds?: {
        [groupId: string]: boolean;
    } | undefined;
    editingGroupId?: string | null | undefined;
    isLibraryOpen?: boolean | undefined;
    isLibraryMenuDocked?: boolean | undefined;
    showStats?: boolean | undefined;
    currentChartType?: import("./types").ChartType | undefined;
};
export declare const cleanAppStateForExport: (appState: Partial<AppState>) => {
    viewBackgroundColor?: string | undefined;
    gridSize?: number | null | undefined;
};
export declare const clearAppStateForDatabase: (appState: Partial<AppState>) => {
    viewBackgroundColor?: string | undefined;
    gridSize?: number | null | undefined;
};
export declare const isEraserActive: ({ activeTool, }: {
    activeTool: AppState["activeTool"];
}) => boolean;
