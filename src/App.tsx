import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout.tsx";
import {Home} from "./pages/Home.tsx";
import {About} from "./pages/About.tsx";
import {Search} from "./pages/Search.tsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={"about"} element={<About />} />
                    <Route path={"search"} element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
