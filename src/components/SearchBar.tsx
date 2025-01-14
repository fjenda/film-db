import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/SearchBar.css";

export const SearchBar = ({ input, setInput, onSearch }) => {
    const handleInput = (e) => {
        setInput(e.target.value.toLowerCase());
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSearch();
        }
    };

    return (
        <Box className="search-bar-container">
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
                aria-label="Search"
            />
        </Box>
    );
};
