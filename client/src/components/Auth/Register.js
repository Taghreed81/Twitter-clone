import React, { useContext, useState } from 'react'
import { toast } from "react-toastify";

import { Twitter } from '../icons'
import { UserContext } from "../../context/UserContext";

function Register({ setAuth }) {


    const { setUser } = useContext(UserContext);


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {

        e.preventDefault()


        if (
            !username ||
            !password
        ) {
            return toast.error("You need to fill in all the fields");
        }


        const body = { username ,email , password };
        setLoading(true)
        console.log("http://localhost:3000")
        try {
            const { token } = await client(`/api/user/signup`, { body });
            localStorage.setItem("token", token);
        } catch (err) {
            return toast.error(err.message);
        } finally {
            setLoading(false)
        }

        const user = await client("/api/user/auth");
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        setUsername('')
        setPassword('')
    }


    return (
        <>
            <form onSubmit={handleLogin} >
                <div className="auth-page__logo">
                    <Button icon><Twitter /></Button>
                </div>
                <TextTitle title >Create your account</TextTitle>

                <div className="form-control">
                    <input
                        type="text"
                        placeholder="User name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <ThemeButton full size="large" type="submit">
                    {"Sign up"}
                </ThemeButton>
                
            </form>
        </>
    )
}

export default Register
