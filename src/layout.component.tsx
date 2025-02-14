import type { LayoutProps } from "antd";
import { Layout } from "antd";
import type { FC, ReactNode } from "react";

export interface ErrorLayoutProps extends LayoutProps {
  children?: ReactNode;
  className?: string; 
}

export const ErrorLayout: FC<ErrorLayoutProps> = ({ children, className, ...props }) => (
  <Layout className={className} {...props}>{children}</Layout>
);
