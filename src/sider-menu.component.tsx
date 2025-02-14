import { Avatar, Col, Menu, Row } from "antd";
import type { MenuItemGroupType, MenuItemType } from "antd/es/menu/interface";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { ErrorMenu } from "./ErrorMenu";

export interface SiderMenuProps {
    menuItems: (MenuItemType | MenuItemGroupType)[];
}

export const SiderMenu: React.FC<SiderMenuProps> = ({ menuItems }) => {

    const [isCollapsed, setIsCollapsed] = useState(true);
    
    return (
        <Sider 
        className="tw-h-screen tw-bg-dark-black tw-shadow-lg"

        collapsible
        collapsed={isCollapsed}
        onCollapse={() => {
            setIsCollapsed(!isCollapsed);
        }}
        width={isCollapsed ? undefined : "320px"}
        trigger={null}
        
        
        >
            <Row style={{ display: "block" }} className="tw-h-full tw-dark-black-bg tw-pb-4 tw-pt-4">
                
                <Row justify="start" className="tw-flex-col tw-h-full tw-mt-4">
                    <Col className="tw-flex tw-mt-5 tw-flex-col tw-mb-5 tw-mt-4 tw-p-3 tw-dark-black-bg">
                        <ErrorMenu theme="light" mode="vertical" items={menuItems} className={"tw-m-4"} />
                    </Col>
                </Row>
            </Row>
        </Sider>
    );
};
