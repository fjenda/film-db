import {MovieData, MovieList} from "../components/MovieList.tsx";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {SearchBar} from "../components/SearchBar.tsx";
import {useNavigate} from "react-router-dom";

export const Search = () => {
    const [list, setList] = useState<MovieData[]>([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const navigate = useNavigate();

    const handleSearch = (searchInput: string) => {
        navigate(`/search?query=${encodeURIComponent(searchInput)}`);
    }

    useEffect(() => {
        if (query) {
            fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`)
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
        <>
            <SearchBar onSearch={handleSearch} type={"wide"} />
            <MovieList list={list} />
        </>
    );
}