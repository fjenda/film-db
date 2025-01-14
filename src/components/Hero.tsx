import Logo from "../assets/logo.svg";
import { ImageThemed } from "./ImageThemed.tsx";
import {Box} from "@mui/material";

export const Hero = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5rem",
                h1: {
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
                },
            }}
        >
            <ImageThemed src={Logo} alt="Logo" theme="auto" />
            <h1>FilmDB</h1>
        </Box>
    )
}