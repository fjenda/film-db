import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {ChangeEvent, useState} from "react";

interface SearchBarProps {
    type?: "normal" | "wide",
    onSearch: (searchInput: string) => void,
}

export const SearchBar = ({ type = "normal", onSearch }: SearchBarProps) => {
    const [input, setInput] = useState("");

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value.toLowerCase());
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onSearch(input);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: type === "wide" ? "2rem" : "1rem",
                padding: {
                    xs: "0.5rem 1rem",
                    sm: "1rem 2rem",
                    md: "2rem 4rem",
                }
            }}
        >
            <TextField
                id="search"
                label="Search"
                variant="outlined"
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                value={input}
                className="search-bar"
                placeholder="Type to search..."
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    },

                }}
                sx={{
                    width: "100%",
                    maxWidth: type === "wide" ? "35rem" : "25rem",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "0.5rem",
                    "& .MuiInputAdornment-root": {
                        color: "#888",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        borderColor: "#3f51b5",
                        boxShadow: "0 0 4px rgba(63, 81, 181, 0.5)",
                    },
                    "& .MuiInputLabel-root.Mui-focus": {
                        display: "none",
                    },
                    "& label.Mui-focused": {
                        color: "#101820",
                    },
                    "@media screen and (prefers-color-scheme: dark)": {
                        "& label.Mui-focused": {
                            color: "#f4f9ff",
                            backgroundColor: "#152535",
                            padding: "0 0.5rem",
                            borderRadius: "0.25rem",
                        }
                    }
                }}
                aria-label="Search"
            />
        </Box>
    );
};
