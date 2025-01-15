import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {ImageThemed} from "./ImageThemed.tsx";
import Logo from "../assets/logo.svg";
import {Link} from "react-router-dom";

export interface MovieDetailData {
    Actors: string,
    Genre: string,
    Plot: string,
    Poster: string,
    Ratings: MovieRatings[],
    Released: string,
    Runtime: string,
    Year: string,
    Title: string,
    imdbID: string,
}

interface MovieRatings {
    Source: string,
    Value: string,
}

interface MovieDetailProps {
    movie: MovieDetailData,
}

export const MovieDetail = ({ movie }: MovieDetailProps) => {

    return (
        <>
            <Box
                sx={{
                    padding: {
                        xs: "0.5rem 1rem",
                        sm: "1rem 2rem",
                        md: "2rem 4rem",
                    },
                }}
            >
                <Card
                    variant={"outlined"}
                    className={"movie-card"}
                    sx={{
                        borderRadius: "0.5rem",
                        display: "flex",
                        gap: "1rem",
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
                    <CardMedia
                        sx={{
                            borderRadius: "0.5rem",
                            width: {
                                xs: "100%",
                                sm: "50%",
                            },
                            height: {
                                xs: "100%",
                                sm: "auto",
                            },
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {movie.Poster === "N/A" ? (
                            <ImageThemed src={Logo} alt={movie.Title} theme={"auto"} />
                        ) : (
                            <Box
                                component={"img"}
                                src={movie.Poster}
                                alt={movie.Title}
                                sx={{
                                    borderRadius: "0.5rem",
                                    width: "100%",
                                    // height: "100%",
                                }}
                            />
                        )}
                    </CardMedia>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <div>
                            <Typography variant={"h4"} component={"h1"}><strong>{movie.Title}</strong> ({movie.Year})</Typography>
                            <Typography variant={"body1"} component={"p"}>{movie.Released} | {movie.Genre} | {movie.Runtime}</Typography>
                        </div>

                        <div>
                            <Typography variant={"h6"} component={"h2"}>Ratings</Typography>
                            {movie.Ratings.map((rating, index) => (
                                <Typography variant={"body2"} component={"p"} key={index}><strong>{rating.Source}:</strong> {rating.Value}</Typography>
                            ))}
                        </div>

                        <div>
                            <Typography variant={"h6"} component={"h2"}>Overview</Typography>
                            <Typography variant={"body1"} component={"p"}>{movie.Plot}</Typography>
                        </div>

                        <div>
                            <Typography variant={"h6"} component={"h2"}>Actors</Typography>
                            <Typography variant={"body1"} component={"p"}>{movie.Actors}</Typography>
                        </div>

                        <Link to={`https://www.imdb.com/title/${movie.imdbID}`} target={"_blank"} rel={"noreferrer"}>
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"} alt={"IMDb"} style={{width: "100px"}} />
                        </Link>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}