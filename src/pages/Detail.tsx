import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {MovieDetail, MovieDetailData} from "../components/MovieDetail.tsx";

export const Detail = () => {
    const [data, setData] = useState<MovieDetailData>();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        if (id) {
            fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    setData(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    })

    return (
        <>
            {data && <MovieDetail movie={data} />}
        </>
    )
}