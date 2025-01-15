import {Box, Typography} from "@mui/material";

export const About = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                maxWidth: 800,
                margin: "auto",
                padding: 2,
            }}
        >
            <Typography variant={"h4"} gutterBottom>About</Typography>
            <Typography variant={"body1"} component={"p"}>
                A React-based movie database application that allows users to search for movies and view detailed information about them.
                The app is built using Material UI for styling and components, React Router for navigation, and the OMDb API for fetching movie data.
            </Typography>
        </Box>
    )
}