import type { BasicProps } from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import type { FC, ReactNode, RefAttributes } from "react";
import React from "react";

export interface ErrorContentProps extends BasicProps, RefAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
}

export const ErrorContent: FC<ErrorContentProps> = ({ className, children, ...props }) => (
    <Content className={className} {...props}>{children}</Content>
);
