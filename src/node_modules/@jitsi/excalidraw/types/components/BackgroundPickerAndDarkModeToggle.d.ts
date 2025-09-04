import React from "react";
import { ActionManager } from "../actions/manager";
import { AppState } from "../types";
export declare const BackgroundPickerAndDarkModeToggle: ({ appState, setAppState, actionManager, showThemeBtn, disableShortcuts, }: {
    actionManager: ActionManager;
    appState: AppState;
    setAppState: React.Component<any, AppState>["setState"];
    showThemeBtn: boolean;
    disableShortcuts?: boolean | undefined;
}) => JSX.Element;
