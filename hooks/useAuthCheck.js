import { userLogin } from "@/fetures/auth/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [checkUserAuth, setCheckUserAuth] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem("auth");

        if (localAuth) {
            const auth = JSON.parse(localAuth);

            if (auth?.accessToken && auth?.user) {
                dispatch(
                    userLogin({
                        accessToken: auth?.accessToken,
                        user: auth?.user,
                    })
                );
            }
        }

        setCheckUserAuth(true);
    }, [dispatch, setCheckUserAuth]);

    return checkUserAuth;
}
