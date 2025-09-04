import { ExcalidrawInitialDataState, ExcalidrawAppProps } from "../../../types";
import { CollabAPI } from "./Collab";
import "../../../excalidraw-app/index.scss";
export declare const initializeScene: (opts: {
    collabAPI: CollabAPI;
}) => Promise<{
    scene: ExcalidrawInitialDataState | null;
} & ({
    isExternalScene: true;
    id: string;
    key: string;
} | {
    isExternalScene: false;
    id?: null | undefined;
    key?: null | undefined;
})>;
export declare const ExcalidrawApp: (props: ExcalidrawAppProps) => JSX.Element;
