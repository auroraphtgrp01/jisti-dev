import { BinaryFiles, LibraryItem } from "../types";
import "./LibraryUnit.scss";
export declare const LibraryUnit: ({ id, elements, files, isPending, onClick, selected, onToggle, onDrag, }: {
    id: LibraryItem["id"] | /** for pending item */ null;
    elements?: readonly import("../types").NonDeleted<import("../types").ExcalidrawElement>[] | undefined;
    files: BinaryFiles;
    isPending?: boolean | undefined;
    onClick: () => void;
    selected: boolean;
    onToggle: (id: string, event: React.MouseEvent) => void;
    onDrag: (id: string, event: React.DragEvent) => void;
}) => JSX.Element;
