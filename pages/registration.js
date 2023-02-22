import Container from "@/components/Container.styled";
import Layout from "@/components/Layout";
import { Heading } from "@/components/styles/Login.styled";
import {
    RegistrationMain,
    Registration_hr,
} from "@/components/styles/Registration.styled";
import Button from "@/components/ui/Button.styled";
import Form, { InputGroup } from "@/components/ui/Form.styled";
import InputBox from "@/components/ui/Input.styled";
import Label from "@/components/ui/Label.styled";
import Link from "next/link";

export default function Registration() {
    return (
        <Layout>
            <Container>
                <RegistrationMain>
                    <Heading>👨‍💻 Welcome to our community 👩‍💻</Heading>
                    <Form>
                        <InputGroup>
                            <div>
                                <Label htmlFor="email">First name</Label>
                                <InputBox
                                    type="email"
                                    placeholder="Email address"
                                    name="email"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">last name</Label>
                                <InputBox
                                    type="email"
                                    placeholder="Email address"
                                    name="email"
                                />
                            </div>
                        </InputGroup>
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
                        <Button lg>Sign up</Button>
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
