import React from "react";
import "../../../css/app.scss";
import "../../../css/styles.scss";
import { ExcalidrawAPIRefValue, ExcalidrawProps } from "../../../types";
declare type PublicExcalidrawProps = Omit<ExcalidrawProps, "forwardedRef">;
export declare const Excalidraw: React.MemoExoticComponent<React.ForwardRefExoticComponent<PublicExcalidrawProps & React.RefAttributes<ExcalidrawAPIRefValue>>>;
export {};
