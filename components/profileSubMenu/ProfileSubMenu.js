import Link from "next/link";
import React from "react";
import { MenuContainer, MenuItems, NameHeader } from "./ProfileSubMenu.styled";

// eslint-disable-next-line react/display-name
const ProfileSubMenu = React.forwardRef((props, ref) => {
    return (
        <MenuContainer ref={ref}>
            <Link href="/">
                <NameHeader>
                    <h3>Fahim muntasir</h3>
                    <span>@fhaimmuntasir</span>
                </NameHeader>
            </Link>
            <MenuItems>
                <li>
                    <Link href="/">Dashboard</Link>
                </li>
                <li>
                    <Link href="/">Create Post</Link>
                </li>
                <li>
                    <Link href="/">Reading List</Link>
                </li>
                <li>
                    <Link href="/">Sign Out</Link>
                </li>
            </MenuItems>
        </MenuContainer>
    );
});

export default ProfileSubMenu;
