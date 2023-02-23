import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { createRef, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import Container from "../Container.styled";
import ProfileSubMenu from "../profileSubMenu/ProfileSubMenu";
import Button from "../ui/Button.styled";
import InputBox from "../ui/Input.styled";
import {
    MobileMenuIcon,
    NavBar,
    NavBrand,
    NavLeft,
    NavMain,
    NavRight,
    ProfileImg,
    SearchBox,
    SearchIcon,
    SearchIcon_M,
} from "./Navbar.styled";

const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0.5 },
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { accessToken, user } = useSelector((state) => state.auth);
    // menu open handler
    const menuOpenHandler = () => {
        setIsOpen(!isOpen);
    };

    // menu refarence
    const menuRef = createRef(null);
    const profileImgRef = useRef(null);

    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !profileImgRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutSide, true);

        return () => {
            document.addEventListener("click", handleClickOutSide, true);
        };
    }, [menuRef]);

    return (
        <NavMain>
            <Container>
                <NavBar>
                    <NavLeft>
                        <MobileMenuIcon>
                            <AiOutlineMenu />
                        </MobileMenuIcon>
                        <NavBrand>
                            <Link href="/">
                                <h2> DEV </h2>
                            </Link>
                        </NavBrand>
                        <SearchBox>
                            <InputBox type="text" placeholder="Search" />
                            <SearchIcon>
                                <BsSearch />
                            </SearchIcon>
                        </SearchBox>
                    </NavLeft>
                    <NavRight>
                        {/* search bar for mobile screen  */}
                        <SearchIcon_M>
                            <BsSearch />
                        </SearchIcon_M>
                        {accessToken && user ? (
                            <>
                                <Link href="/new">
                                    <Button outline lg>
                                        Create Post
                                    </Button>
                                </Link>
                                <ProfileImg>
                                    <Image
                                        ref={profileImgRef}
                                        onClick={menuOpenHandler}
                                        src="/mypic.jpeg"
                                        alt="profile"
                                        width={40}
                                        height={40}
                                    />
                                </ProfileImg>
                                <motion.div
                                    animate={isOpen ? "open" : "closed"}
                                    variants={variants}
                                >
                                    {isOpen && <ProfileSubMenu ref={menuRef} />}
                                </motion.div>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <Button outline lg>
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/registration">
                                    <Button outline lg>
                                        Create account
                                    </Button>
                                </Link>
                                <motion.div
                                    animate={isOpen ? "open" : "closed"}
                                    variants={variants}
                                >
                                    {isOpen && <ProfileSubMenu ref={menuRef} />}
                                </motion.div>
                            </>
                        )}
                    </NavRight>
                </NavBar>
            </Container>
        </NavMain>
    );
}
