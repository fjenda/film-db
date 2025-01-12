import "../styles/Hero.css";
import Logo from "../assets/logo.svg";
import { ImageThemed } from "./Image.tsx";

export const Hero = () => {
    return (
        <div className={"hero-wrapper"}>
            <ImageThemed src={Logo} alt="Logo" theme="auto" />
            <h1>FilmDB</h1>
        </div>
    )
}