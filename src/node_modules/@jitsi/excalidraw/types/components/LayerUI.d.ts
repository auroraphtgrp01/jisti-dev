import React from "react";
import { ActionManager } from "../actions/manager";
import { NonDeletedExcalidrawElement } from "../element/types";
import { Language } from "../i18n";
import { AppProps, AppState, ExcalidrawProps, BinaryFiles } from "../types";
import Library from "../data/library";
import "./LayerUI.scss";
import "./Toolbar.scss";
interface LayerUIProps {
    actionManager: ActionManager;
    appState: AppState;
    files: BinaryFiles;
    canvas: HTMLCanvasElement | null;
    setAppState: React.Component<any, AppState>["setState"];
    elements: readonly NonDeletedExcalidrawElement[];
    onCollabButtonClick?: () => void;
    onLockToggle: () => void;
    onPenModeToggle: () => void;
    onInsertElements: (elements: readonly NonDeletedExcalidrawElement[]) => void;
    showExitZenModeBtn: boolean;
    showThemeBtn: boolean;
    langCode: Language["code"];
    isCollaborating: boolean;
    renderTopRightUI?: ExcalidrawProps["renderTopRightUI"];
    renderCustomFooter?: ExcalidrawProps["renderFooter"];
    renderCustomStats?: ExcalidrawProps["renderCustomStats"];
    libraryReturnUrl: ExcalidrawProps["libraryReturnUrl"];
    UIOptions: AppProps["UIOptions"];
    focusContainer: () => void;
    library: Library;
    id: string;
    onImageAction: (data: {
        insertOnCanvasDirectly: boolean;
    }) => void;
}
declare const _default: React.MemoExoticComponent<({ actionManager, appState, files, setAppState, canvas, elements, onCollabButtonClick, onLockToggle, onPenModeToggle, onInsertElements, showExitZenModeBtn, showThemeBtn, isCollaborating, renderTopRightUI, renderCustomFooter, renderCustomStats, libraryReturnUrl, UIOptions, focusContainer, library, id, onImageAction, }: LayerUIProps) => JSX.Element>;
export default _default;
