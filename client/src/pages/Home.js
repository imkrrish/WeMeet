import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory();

    const callHomePage = async () => {
        try {
            const res = await fetch('/home', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            console.log('this error');
            history.push('/signin')
        }
    }

    useEffect(() => {
        callHomePage();
    });

    return (
        <div>
            <form method="GET">
                <h1>Hello Home!</h1>
            </form>
        </div>
    )
}

export default Home
