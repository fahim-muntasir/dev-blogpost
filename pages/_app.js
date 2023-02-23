import GlobalStyle from "@/components/GlobalStyled";
import useAuthCheck from "@/hooks/useAuthCheck";
import { wrapper } from "@/store/store";
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
        secondary_hover: "#dddddd8f",
        text_gray: "#4b5563",
        bodyColor: "#F5F5F5",
        dark: "#000000",
    },
};

function App({ Component, pageProps }) {
    const authCheck = useAuthCheck();

    return !authCheck ? (
        <div>Loading...</div>
    ) : (
        <ThemeProvider theme={theme}>
            <main className={roboto.className}>
                <GlobalStyle />
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    );
}

export default wrapper.withRedux(App);
