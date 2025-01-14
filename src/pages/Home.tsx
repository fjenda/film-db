import {Box, Card, CardContent, CardMedia} from "@mui/material";
import {Hero} from "../components/Hero.tsx";
import {SearchBar} from "../components/SearchBar.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSearch = (searchInput: string) => {
        navigate(`/search?query=${encodeURIComponent(searchInput)}`);
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: "1",
                height: "100%",
            }}
        >
            <Card variant={"outlined"}
                  sx={{
                      borderRadius: "0.5rem",
                      padding: {
                          xs: "0.5rem 1rem",
                          sm: "1rem 2rem",
                          md: "2rem 4rem",
                      },
                      "@media screen and (prefers-color-scheme: dark)": {
                          backgroundColor: "#152535",
                          color: "#f4f9ff",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                      },
                  }}
            >
                <CardMedia>
                    <Hero />
                </CardMedia>
                <CardContent>
                    <SearchBar input={input} setInput={setInput} onSearch={handleSearch} />
                </CardContent>
            </Card>
        </Box>
    )
}