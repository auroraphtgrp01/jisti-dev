import React from "react";
import { ActionManager } from "../actions/manager";
import { ExcalidrawElement, PointerType } from "../element/types";
import { AppState, Zoom } from "../types";
export declare const SelectedShapeActions: ({ appState, elements, renderAction, activeTool, disableAlignItems, disableGrouping, disableLink, disableShortcuts, disableVerticalAlignOptions, fontSizeOptions, hideArrowHeadsOptions, hideColorInput, hideFontFamily, hideLayers, hideOpacityInput, hideSharpness, hideStrokeStyle, hideTextAlign, }: {
    appState: AppState;
    elements: readonly ExcalidrawElement[];
    renderAction: ActionManager["renderAction"];
    activeTool: AppState["activeTool"]["type"];
    disableAlignItems?: boolean | undefined;
    disableGrouping?: boolean | undefined;
    disableLink?: boolean | undefined;
    disableShortcuts?: boolean | undefined;
    disableVerticalAlignOptions?: boolean | undefined;
    fontSizeOptions?: String[] | undefined;
    hideArrowHeadsOptions?: boolean | undefined;
    hideColorInput?: boolean | undefined;
    hideFontFamily?: boolean | undefined;
    hideLayers?: boolean | undefined;
    hideOpacityInput?: boolean | undefined;
    hideSharpness?: boolean | undefined;
    hideStrokeStyle?: boolean | undefined;
    hideTextAlign?: boolean | undefined;
}) => JSX.Element;
export declare const ShapesSwitcher: ({ canvas, activeTool, allowedShapes, disableShortcuts, setAppState, onImageAction, appState, }: {
    canvas: HTMLCanvasElement | null;
    activeTool: AppState["activeTool"];
    allowedShapes: Array<String>;
    disableShortcuts?: boolean | undefined;
    setAppState: React.Component<any, AppState>["setState"];
    onImageAction: (data: {
        pointerType: PointerType | null;
    }) => void;
    appState: AppState;
}) => JSX.Element;
export declare const ZoomActions: ({ disableShortcuts, renderAction, zoom, }: {
    disableShortcuts?: boolean | undefined;
    renderAction: ActionManager["renderAction"];
    zoom: Zoom;
}) => JSX.Element;
