import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { ErrorContent } from "./content";
import React from "react";

export const ModuleContent: FC = () => (
    <ErrorContent className={"tw-px-4 tw-py-4"}>
        <Outlet />
    </ErrorContent>
);
