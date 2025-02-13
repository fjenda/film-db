import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";

export interface NavbarLink {
    text: string,
    link: string,
}

export const Navbar = ({ navLinks }: { navLinks: NavbarLink[] }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    top: "0",
                    left: "0",
                    backgroundColor: "#ffffff",
                    "@media screen and (prefers-color-scheme: dark)": {
                        backgroundColor: "#152535",
                    },
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography
                        variant="h6"
                        sx={{
                            textTransform: "uppercase",
                            fontSize: "1rem",
                            fontWeight: "700",
                            letterSpacing: "0.65rem",
                            color: "#152535",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            transform: "scale(1.1)",
                            "@media screen and (prefers-color-scheme: dark)": {
                                color: "#f4f9ff",
                            },
                        }}
                    >
                        <Link
                            to={"/"}
                            style={{
                                textDecoration: "none",
                                color: "inherit"
                            }}
                        >
                            FilmDB
                        </Link>
                    </Typography>

                    {isDesktop ? (
                        <div>
                            {navLinks.map((link) => (
                                <Button
                                    key={link.text}
                                    component={Link as React.ElementType}
                                    to={link.link}
                                    color="inherit"
                                    sx={{
                                        textDecoration: "none",
                                        color: "#152535",
                                        "@media screen and (prefers-color-scheme: dark)": {
                                            color: "#f4f9ff",
                                        },
                                    }}
                                >
                                    {link.text}
                                </Button>
                            ))}
                        </div>
                    ) : (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {navLinks.map((link) => (
                        <ListItem
                            key={link.text}
                            onClick={toggleDrawer(false)}
                            component={Link as React.ElementType}
                            to={link.link}
                            sx={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            {link.text}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
