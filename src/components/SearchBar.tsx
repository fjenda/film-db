import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {ChangeEvent, useState} from "react";

export const SearchBar = ({ onSearch }: { onSearch: (searchInput: string) => void,  }) => {
    const [input, setInput] = useState("");

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value.toLowerCase());
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
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
                margin: "1rem 0",
            }}
        >
            <TextField
                id="search"
                label="Search"
                variant="outlined"
                onChange={handleInput}
                onKeyPress={handleKeyPress}
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
                    maxWidth: "400px",
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
                        }
                    }
                }}
                aria-label="Search"
            />
        </Box>
    );
};
