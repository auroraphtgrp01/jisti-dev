import { ImportedDataState } from "../../data/types";
import { ExcalidrawElement } from "../../element/types";
import { AppState, BinaryFiles, UserIdleState } from "../../types";
export declare type SyncableExcalidrawElement = ExcalidrawElement & {
    _brand: "SyncableExcalidrawElement";
};
export declare const isSyncableElement: (element: ExcalidrawElement) => element is SyncableExcalidrawElement;
export declare const getSyncableElements: (elements: readonly ExcalidrawElement[]) => SyncableExcalidrawElement[];
/**
 * Right now the reason why we resolve connection params (url, polling...)
 * from upstream is to allow changing the params immediately when needed without
 * having to wait for clients to update the SW.
 *
 * If collabServerUrl is provided, we use that instead (useful for packages)
 * If REACT_APP_WS_SERVER_URL env is set, we use that instead (useful for forks)
 */
export declare const getCollabServer: (collabServerUrl?: string) => Promise<{
    url: string;
    polling: boolean;
}>;
export declare type EncryptedData = {
    data: ArrayBuffer;
    iv: Uint8Array;
};
export declare type SocketUpdateDataSource = {
    SCENE_INIT: {
        type: "SCENE_INIT";
        payload: {
            elements: readonly ExcalidrawElement[];
        };
    };
    SCENE_UPDATE: {
        type: "SCENE_UPDATE";
        payload: {
            elements: readonly ExcalidrawElement[];
        };
    };
    MOUSE_LOCATION: {
        type: "MOUSE_LOCATION";
        payload: {
            socketId: string;
            pointer: {
                x: number;
                y: number;
            };
            button: "down" | "up";
            selectedElementIds: AppState["selectedElementIds"];
            username: string;
        };
    };
    IDLE_STATUS: {
        type: "IDLE_STATUS";
        payload: {
            socketId: string;
            userState: UserIdleState;
            username: string;
        };
    };
};
export declare type SocketUpdateDataIncoming = SocketUpdateDataSource[keyof SocketUpdateDataSource] | {
    type: "INVALID_RESPONSE";
};
export declare type SocketUpdateData = SocketUpdateDataSource[keyof SocketUpdateDataSource] & {
    _brand: "socketUpdateData";
};
export declare const isCollaborationLink: (link: string) => boolean;
export declare const getCollaborationLinkData: (link: string) => {
    roomId: string;
    roomKey: string;
} | null;
export declare const generateCollaborationLinkData: () => Promise<{
    roomId: string;
    roomKey: string;
}>;
export declare const getCollaborationLink: (data: {
    roomId: string;
    roomKey: string;
}) => string;
export declare const loadScene: (id: string | null, privateKey: string | null, localDataState: ImportedDataState | undefined | null) => Promise<{
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
        isResizing: boolean;
        isRotating: boolean;
        openMenu: "canvas" | "shape" | null;
        openPopup: "canvasColorPicker" | "backgroundColorPicker" | "strokeColorPicker" | null;
        lastPointerDownWith: import("../../types").PointerType;
        selectedElementIds: {
            [id: string]: boolean;
        };
        previousSelectedElementIds: {
            [id: string]: boolean;
        };
        showHelpDialog: boolean;
        toast: {
            message: string;
            closable?: boolean | undefined;
            duration?: number | undefined;
        } | null;
        zenModeEnabled: boolean;
        gridSize: number | null;
        viewModeEnabled: boolean;
        selectedGroupIds: {
            [groupId: string]: boolean;
        };
        editingGroupId: string | null;
        isLibraryOpen: boolean;
        isLibraryMenuDocked: boolean;
        fileHandle: import("browser-fs-access").FileSystemHandle | null;
        collaborators: Map<string, import("../../types").Collaborator>;
        showStats: boolean;
        currentChartType: import("../../types").ChartType;
        pasteDialog: {
            shown: false;
            data: null;
        } | {
            shown: true;
            data: import("../../charts").Spreadsheet;
        };
        pendingImageElementId: string | null;
        showHyperlinkPopup: false | "info" | "editor";
    };
    files: BinaryFiles;
    commitToHistory: boolean;
}>;
export declare const exportToBackend: (elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles) => Promise<void>;
