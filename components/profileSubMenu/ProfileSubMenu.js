import { userLogout } from "@/fetures/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MenuContainer, MenuItems, NameHeader } from "./ProfileSubMenu.styled";

// eslint-disable-next-line react/display-name
const ProfileSubMenu = React.forwardRef((props, ref) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const logoutHandler = () => {
        setLoading(true);
        setTimeout(() => {
            dispatch(userLogout());
            router.push("/");
            setLoading(false);
        }, 500);
        // remove local store auth value
        localStorage.removeItem("auth");
    };

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
                    <button disabled={loading} onClick={logoutHandler}>
                        Sign out
                    </button>
                </li>
            </MenuItems>
        </MenuContainer>
    );
});

export default ProfileSubMenu;
