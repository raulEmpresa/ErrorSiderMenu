
import type { SiderMenuProps } from "./sider-menu.component";
import type { FC } from "react";
import { Col, Row } from "antd";
import { ErrorLayout } from "./layout.component";
import { observer } from "mobx-react";
import { ErrorModuleLayout } from "./ErrorModuleLayout";
import { LogOutIcon } from "./log-out-icon";
import { LanguageIcon } from "./language-icon";

const _StationModuleLayout: FC = () => {

    const menuItems: SiderMenuProps["menuItems"] = [
        {
            key: "language",
            icon: <LanguageIcon fill={"#151916"} />,
            label: "Language",
            children: [
                {
                    key: "Español",
                    icon: (
                        <Row>
                            <Col
                                className={
                                    "tw-flex tw-items-center tw-space-x-4"
                                }
                            >
                                <LogOutIcon fill={"#151916"}/>
                                <span> Español </span>
                            </Col>
                        </Row>
                    ),
                },
                {
                    key: "Frances",
                    icon: (
                        <Row>
                            <Col
                                className={
                                    "tw-flex tw-items-center tw-space-x-4"
                                }
                            >
                                <LogOutIcon fill={"#151916"}/>
                                <span> Frances </span>
                            </Col>
                        </Row>
                    ),
                },
                {
                    key: "InglEs",
                    icon: (
                        <Row>
                            <Col
                                className={
                                    "tw-flex tw-items-center tw-space-x-4"
                                }
                            >
                                <LogOutIcon fill={"#151916"}/>
                                <span> Ingles</span>
                            </Col>
                        </Row>
                    ),
                },
            ],
        },
        {
            key: "",
            icon: <LogOutIcon fill={"#151916"}/>,
            label: "",
        },
    ];

    return (
        <>
            <ErrorLayout
                className={
                    "tw-max-h-screen tw-overflow-hidden tw-dark-black-bg tw-hidden sm:tw-flex"
                }
            >
                <ErrorModuleLayout menuItems={menuItems} />
            </ErrorLayout>
        </>
    );
};

export const StationModuleLayout = observer(_StationModuleLayout);
