import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Base() {
    return (
        <div className="container">
            <Nav />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}