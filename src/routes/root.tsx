import {useEffect, useState} from "react";
import {darkTheme, DashboardThemes} from "@frc-web-components/fwc/themes";
import {customDarkTheme, customLightTheme} from "../themes.ts";
import Navbar from "../components/Navbar.tsx";

const themes = new DashboardThemes();
themes.addThemeRules("dark", { ...darkTheme, ...customDarkTheme });
themes.addThemeRules("light", customLightTheme);

export default function Root() {

    const [, setTheme] = useState("light");

    useEffect(() => {
        setTheme("dark");
        themes.setTheme(document.body, 'dark');
    }, []);

    return (
        <>
            <Navbar active={"auto"}/>
            <h1>Connection status</h1>
        </>
    )
}