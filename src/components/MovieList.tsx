import { useEffect, useState } from "react";
import {Box, Card, CardContent, CardMedia, Grid2} from "@mui/material";

interface MovieData {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
}

export const MovieList = ({ list }: []) =>  {
    const [movieData, setMovieData] = useState<MovieData[]>([]);
    useEffect(() => {
        setMovieData(list);
    }, [list]);

    return (
        <Box
            sx={{
                padding: {
                    xs: "1rem",
                    sm: "2rem",
                    md: "4rem",
                },
            }}
        >
            <Grid2 container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    {movieData && movieData.length > 0 ? (
                        movieData.map((movie: MovieData) => (
                            <Grid2 size={3} key={movie.imdbID}>
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
                                        ".movie-title": {
                                            fontSize: "1.5rem",
                                            fontWeight: 500,
                                            margin: "1rem 0",
                                        },
                                    }}
                                >
                                    <CardMedia>
                                        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer" key={movie.imdbID}>
                                            <Box component={"img"} src={movie.Poster} alt={movie.Title} sx={{ maxHeight: "300px", borderRadius: "0.25rem" }} />
                                        </a>
                                    </CardMedia>
                                    <CardContent>
                                        <h1 className={"movie-title"}>{movie.Title}</h1>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        ))
                    ) : (
                        <h1>No movies found</h1>
                    )}
            </Grid2>
        </Box>
    )
}