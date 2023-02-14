import Container from "./Container.styled";
import Navbar from "./navBar/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Container>{children}</Container>
        </>
    );
}
