import { Outlet } from "react-router-dom";
import {Navbar, NavbarLink} from "../components/Navbar.tsx";
import {Box} from "@mui/material";

export const Layout = () => {
    const links: NavbarLink[] = [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}>
            <Navbar navLinks={links} />
            <Outlet />
        </Box>
    )
}