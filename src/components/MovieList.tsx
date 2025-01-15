import {Box, Card, CardContent, CardMedia, Grid2, Typography} from "@mui/material";
import {ImageThemed} from "./ImageThemed.tsx";
import Logo from "../assets/logo.svg";
import {Link} from "react-router-dom";

export interface MovieData {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
}

interface MovieListProps {
    list: MovieData[],
}

export const MovieList = ({ list }: MovieListProps) =>  {
    return (
        <Box
            sx={{
                padding: {
                    xs: "0.5rem 1rem",
                    sm: "1rem 2rem",
                    md: "2rem 4rem",
                },
            }}
        >
            <Grid2 container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    {list && list.length > 0 ? (
                        list.map((movie: MovieData) => (
                            <Grid2
                                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                                key={movie.imdbID}>
                                <Link to={`/detail?id=${movie.imdbID}`} style={{ textDecoration: "none" }}>
                                    <Card
                                        variant={"outlined"}
                                        className={"movie-card"}
                                        sx={{
                                            borderRadius: "0.5rem",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            height: "100%",
                                            padding: {
                                                xs: "0.25rem 0.5rem",
                                                sm: "0.5rem 1rem",
                                                md: "1rem 2rem",
                                            },
                                            "@media screen and (prefers-color-scheme: dark)": {
                                                backgroundColor: "#152535",
                                                color: "#f4f9ff",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                            },
                                        }}
                                    >
                                        <CardMedia>
                                            {movie.Poster === "N/A" ? (
                                                <ImageThemed src={Logo} alt={movie.Title} theme={"auto"} />
                                            ) : (
                                                <Box
                                                    component={"img"}
                                                    src={movie.Poster}
                                                    alt={movie.Title}
                                                    sx={{
                                                        maxHeight: "300px",
                                                        borderRadius: "0.25rem"
                                                    }}
                                                />
                                            )}
                                        </CardMedia>
                                        <CardContent>
                                            <Typography
                                                variant={"h1"}
                                                sx={{
                                                    fontSize: {
                                                        xs: "1rem",
                                                        sm: "1.25rem",
                                                        md: "1.5rem",
                                                    },
                                                    fontWeight: 500,
                                                    margin: "1rem 0",
                                                }}
                                            >
                                                {movie.Title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid2>
                        ))
                    ) : (
                        <Typography variant={"h1"}>
                            No movies found
                        </Typography>
                    )}
            </Grid2>
        </Box>
    )
}