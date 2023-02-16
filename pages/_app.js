import GlobalStyle from "@/components/GlobalStyled";
import { Roboto } from "@next/font/google";
import { ThemeProvider } from "styled-components";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const theme = {
    colors: {
        primary: "#4f46e5",
        secondary: "white",
        primary_hover: "#6366f133",
        text_gray: "#4b5563",
        bodyColor: "#F5F5F5",
        dark: "#000000",
    },
};

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <main className={roboto.className}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </main>
            </ThemeProvider>
        </>
    );
}
