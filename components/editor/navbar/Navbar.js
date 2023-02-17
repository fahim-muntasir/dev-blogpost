import Container from "@/components/Container.styled";
import {
    NavBar,
    NavBrand,
    NavLeft,
    NavMain,
    NavRight,
} from "@/components/navBar/Navbar.styled";
import Link from "next/link";
import { GrFormClose } from "react-icons/gr";
import { CloseBtn } from "./Navbar.styled";

export default function Navbar() {
    return (
        <NavMain>
            <Container>
                <NavBar>
                    <NavLeft>
                        <NavBrand>
                            <Link href="/">
                                <h2> DEV </h2>
                            </Link>
                        </NavBrand>
                    </NavLeft>
                    <NavRight>
                        <CloseBtn>
                            <GrFormClose />
                        </CloseBtn>
                    </NavRight>
                </NavBar>
            </Container>
        </NavMain>
    );
}
