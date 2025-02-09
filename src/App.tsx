import type { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

export default function app(): ReactNode {
    return (
        <>
            <h1>MAIN MENU</h1>
            <Link to={"/"}>home</Link>
            <Link to={"/characters"}>characters</Link>
            <Outlet />
        </>
    );
}
