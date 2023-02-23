import Container from "@/components/Container.styled";
import Layout from "@/components/Layout";
import { Heading } from "@/components/styles/Login.styled";
import {
    RegistrationMain,
    Registration_hr,
} from "@/components/styles/Registration.styled";
import AlertMessage from "@/components/ui/AlertMessage.styled";
import Button from "@/components/ui/Button.styled";
import Form, { InputGroup } from "@/components/ui/Form.styled";
import InputBox from "@/components/ui/Input.styled";
import Label from "@/components/ui/Label.styled";
import { useRegisterMutation } from "@/fetures/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiAlertOctagon } from "react-icons/fi";
import { TiInfoLarge } from "react-icons/ti";

export default function Registration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const [
        register,
        { data, isError, isLoading, isSuccess, error: registerError },
    ] = useRegisterMutation();

    useEffect(() => {
        if (registerError?.data) {
            setError(registerError?.data?.error?.message);
        }
        if (isSuccess) {
            router.push("/");
        }
    }, [data, registerError, isSuccess, router]);

    const submitHandler = (e) => {
        e.preventDefault();

        setError("");

        register({
            username: userName,
            email,
            password,
        });
    };

    let alertMessage = null;
    if (isError && error) {
        alertMessage = (
            <AlertMessage error>
                <FiAlertOctagon /> <span>{error}</span>
            </AlertMessage>
        );
    }

    if (isSuccess) {
        alertMessage = (
            <AlertMessage success>
                <TiInfoLarge /> <span>Hello</span>
            </AlertMessage>
        );
    }

    return (
        <Layout>
            <Container>
                <RegistrationMain>
                    <Heading>👨‍💻 Welcome to our community 👩‍💻</Heading>
                    {alertMessage}
                    <Form onSubmit={submitHandler}>
                        <InputGroup>
                            <div>
                                <Label htmlFor="firstName">First name</Label>
                                <InputBox
                                    type="text"
                                    placeholder="First name"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Label htmlFor="lastName">last name</Label>
                                <InputBox
                                    type="text"
                                    placeholder="Last name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>
                        </InputGroup>
                        <Label htmlFor="userName">Username</Label>
                        <InputBox
                            type="text"
                            placeholder="User name"
                            name="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                        <Label htmlFor="email">Email address</Label>
                        <InputBox
                            type="email"
                            placeholder="Email address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Label htmlFor="password">Password</Label>
                        <InputBox
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" lg disabled={isLoading}>
                            Sign up
                        </Button>
                    </Form>
                    <Registration_hr>
                        <span>
                            Already Have an account?
                            <Link href="/login">Login</Link>
                        </span>
                    </Registration_hr>
                </RegistrationMain>
            </Container>
        </Layout>
    );
}
