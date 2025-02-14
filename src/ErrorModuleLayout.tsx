
import { SiderMenu } from "./sider-menu.component";
import type { MenuItemGroupType, MenuItemType } from "antd/es/menu/interface";
import React from "react";
import type { FC } from "react";
import { ErrorLayout } from "./layout.component";

export interface ActionMenuFooter {
    key: string;
    button: React.JSX.Element;
    label: string;
    selected: boolean;
}

export interface ModuleLayout {
    menuItems: (MenuItemType | MenuItemGroupType)[];
}

export const ErrorModuleLayout: FC<ModuleLayout> = ({ menuItems }) => (
    <ErrorLayout className={"tw-flex tw-mt-5 tw-max-h-screen tw-overflow-hidden tw-bg-white"}>
        <SiderMenu menuItems={menuItems} />
    </ErrorLayout>
);
