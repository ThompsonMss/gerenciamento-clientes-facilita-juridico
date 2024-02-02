import { getTheme } from "@Shared/Styles/Themes";

export function useGetTheme() {

    // Recuperar caso tenha mais do storage. 

    const theme = getTheme('light')
    return { theme };
}