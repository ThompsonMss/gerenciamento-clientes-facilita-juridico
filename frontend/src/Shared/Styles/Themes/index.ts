import { ThemeLight } from "./ThemeLight";

type TypesOfTheme = "light" | null;

export function getTheme(typeOfTheme: TypesOfTheme) {

    switch (typeOfTheme) {
        case "light":
            return ThemeLight;
        default:
            return ThemeLight;
    }

}