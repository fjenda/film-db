import { useEffect, useState } from "react";
import {Card, CardContent, CardMedia, Grid2} from "@mui/material";
import "../styles/MovieList.css";

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
        console.log(list);
        console.log(movieData);

    }, [list]);

    return (
        <>
            <Grid2 container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    {movieData && movieData.length > 0 ? (
                        movieData.map((movie: MovieData) => (

                            <Grid2 size={3}>
                                <Card variant={"outlined"} className={"movie-card"}>
                                    <CardMedia>
                                        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer" key={movie.imdbID}>
                                            <img src={movie.Poster} alt={movie.Title} />
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
        </>
    )
}