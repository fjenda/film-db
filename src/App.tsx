import "./styles/App.css";
import { Hero } from "./components/Hero.tsx";
import {Card, CardContent, CardMedia, TextField} from "@mui/material";

export const App = () => {
    return (
        <div id="app">
            <Card variant={"outlined"} sx={{ backgroundColor: "#152535", padding: "1rem 2rem", borderRadius: "0.5rem" }}>
                <CardMedia>
                    <Hero />
                </CardMedia>
                <CardContent>
                    <TextField fullWidth label={"Title"} id={"title"} color={"secondary"}/>
                </CardContent>
            </Card>
        </div>
    )
}
