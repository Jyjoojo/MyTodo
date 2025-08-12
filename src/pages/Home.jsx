import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export function Home(){
    return <>
        <Navbar />
        <Outlet />
    </>
}