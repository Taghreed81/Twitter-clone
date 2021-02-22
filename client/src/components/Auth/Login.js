import React, { useContext, useState } from 'react'
import { toast } from "react-toastify";

import ThemeButton from '../ThemeButton/ThemeButton'
import TextTitle from '../Text/title'
import { Twitter } from '../icons'
import Button from '../Button/Button'
import { UserContext } from "../../context/UserContext";



function Login({ setAuth }) {

    const { setUser } = useContext(UserContext);


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {

        e.preventDefault()

        if (
            !username ||
            !password
        ) {
            return toast.error("You need to fill in all the fields");
        }


        const body = { username: username, password: password };
        setLoading(true)
        try {
            const { token } = await client("/api/user/signin", { body });
            localStorage.setItem("token", token);
        } catch (err) {
            return toast.error(err.message);
        } finally {
            setLoading(false)
        }
        const user = await client("/api/user/auth");
        console.log('here is the user info',user)
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);


        setUsername('')
        setPassword('')
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <div className="auth-page__logo">
                    <Button icon><Twitter /></Button>
                </div>
                <TextTitle title >Login to Twitter</TextTitle>

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
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <ThemeButton disabled={loading} full size="large" type="submit">
                    {"Login"}
                </ThemeButton>
               
            </form>
        </>
    )
}

export default Login
