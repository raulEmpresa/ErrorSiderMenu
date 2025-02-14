
import type { BasicProps } from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import { observer } from "mobx-react";
import type { FC, RefAttributes } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

export type ErrorHeaderProps = BasicProps & RefAttributes<HTMLElement>;

const _ErrorHeader: FC<ErrorHeaderProps> = (props) => {
    const route = useLocation();

    return (
        <Header
            {...props}
            className={
                "tw-border-b-[1px] tw-light-gray-text tw-px-3 tw-w-full tw-bg-white tw-h-16"
            }
        >
            <h3>
                HEADER
            </h3>
        </Header>
    );
};

export const ErrorHeader = observer(_ErrorHeader);
