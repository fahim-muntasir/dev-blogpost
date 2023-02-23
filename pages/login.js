import Container from "@/components/Container.styled";
import Layout from "@/components/Layout";
import { Heading, LoginMain } from "@/components/styles/Login.styled";
import AlertMessage from "@/components/ui/AlertMessage.styled";
import Button from "@/components/ui/Button.styled";
import Form from "@/components/ui/Form.styled";
import InputBox from "@/components/ui/Input.styled";
import Label from "@/components/ui/Label.styled";
import { useLoginMutation } from "@/fetures/auth/authApi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiAlertOctagon } from "react-icons/fi";
import { TiInfoLarge } from "react-icons/ti";

export default function Login() {
    const [identifier, setIdentifire] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [login, { data, isError, isLoading, isSuccess, error: loginError }] =
        useLoginMutation();

    const router = useRouter();

    useEffect(() => {
        if (loginError?.data) {
            setError(loginError?.data?.error?.message);
        }
        if (isSuccess) {
            router.push("/");
        }
    }, [data, loginError, isSuccess, router]);

    const submitHandler = (e) => {
        e.preventDefault();
        login({
            identifier,
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
                <TiInfoLarge /> <span>Login successfull</span>
            </AlertMessage>
        );
    }

    return (
        <Layout>
            <Container>
                <LoginMain>
                    <Heading>👨‍💻 Welcome to our community 👩‍💻</Heading>
                    {alertMessage}
                    <Form onSubmit={submitHandler}>
                        <Label htmlFor="identifier">Email or username</Label>
                        <InputBox
                            type="text"
                            placeholder="Email address"
                            name="identifier"
                            required
                            value={identifier}
                            onChange={(e) => setIdentifire(e.target.value)}
                        />
                        <Label htmlFor="password">Password</Label>
                        <InputBox
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button lg type="submit" disabled={isLoading}>
                            Login
                        </Button>
                    </Form>
                </LoginMain>
            </Container>
        </Layout>
    );
}
