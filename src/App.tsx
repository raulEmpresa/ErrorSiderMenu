import { App as AntdApp, ConfigProvider } from "antd";
import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { HomeRoutes } from "./routes";
import { StationModuleLayout } from "./error-module.layout";

const _App: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige automáticamente a la ruta de Home
    
    navigate(HomeRoutes.HOME, { replace: true });
  });

  return (
    <ConfigProvider>
      <AntdApp>
        <div>
        <StationModuleLayout />
        </div>
      </AntdApp>
    </ConfigProvider>
  );
};

export const App: FC = () => <_App />;
