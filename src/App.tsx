import "./styles/App.css";
import { Hero } from "./components/Hero.tsx";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar.tsx";
import { MovieList } from "./components/MovieList.tsx";
import {OMDB_API_KEY} from "./secret.ts";

enum State {
    MAIN,
    SEARCH,
}

export const App = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const [state, setState] = useState(State.MAIN);

    const onSearch = () => {
        fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${input}`)
            .then((response) => response.json())
            .then((data) => {
                setList(data.Search || []);
                setState(State.SEARCH);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }


    return (
        <div id="app">
            {state === State.MAIN ? (
                <Card variant={"outlined"} className={"main-card"} >
                    <CardMedia>
                        <Hero />
                    </CardMedia>
                    <CardContent>
                        <SearchBar input={input} setInput={setInput} onSearch={onSearch} />
                    </CardContent>
                </Card>
            ) : (
                <MovieList list={list} />
            )}
        </div>
    )
}
