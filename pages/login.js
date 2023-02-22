import Container from "@/components/Container.styled";
import Layout from "@/components/Layout";
import { Heading, LoginMain } from "@/components/styles/Login.styled";
import Button from "@/components/ui/Button.styled";
import Form from "@/components/ui/Form.styled";
import InputBox from "@/components/ui/Input.styled";
import Label from "@/components/ui/Label.styled";

export default function Login() {
    return (
        <Layout>
            <Container>
                <LoginMain>
                    <Heading>👨‍💻 Welcome to our community 👩‍💻</Heading>
                    <Form>
                        <Label htmlFor="email">Email address</Label>
                        <InputBox
                            type="email"
                            placeholder="Email address"
                            name="email"
                        />
                        <Label htmlFor="password">Password</Label>
                        <InputBox
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                        <Button lg>Login</Button>
                    </Form>
                </LoginMain>
            </Container>
        </Layout>
    );
}
