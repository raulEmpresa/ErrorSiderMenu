import { Route } from "react-router-dom";

export enum HomePaths {
    Home = "/",
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HomeRoutes {
    static HOME = "/HOME";
}

export const homeRoutes = (
    <Route
        path={HomeRoutes.HOME}
        lazy={async () => {
            const { StationModuleLayout } = await import(
                "./error-module.layout.tsx"
            );
            return { Component: StationModuleLayout };
        }}
    />
);
