import type { MenuProps } from "antd";
import { Menu } from "antd";
import type { FC } from "react";

export type ErrorMenuProps = MenuProps;

export const ErrorMenu: FC<ErrorMenuProps> & {
    Item: typeof Menu.Item;
    Divider: typeof Menu.Divider;
} = (props) => (
    <Menu
        {...props}
        className={"tw-dark-black-bg tw-bold-text tw-mt-5"}
    />
);

ErrorMenu.Item = Menu.Item;
ErrorMenu.Divider = Menu.Divider;
