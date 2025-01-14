import { MovieList } from "../components/MovieList.tsx";
import { OMDB_API_KEY } from "../secret.ts";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
    const [list, setList] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    useEffect(() => {
        if (query) {
            fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`)
                .then((response) => response.json())
                .then((data) => {
                    setList(data.Search || []);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [query]);

    return (
        <MovieList list={list} />
    );
}