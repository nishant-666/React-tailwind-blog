import React, { useState, useEffect } from 'react';
import { Card, Feed, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        let userToken = sessionStorage.getItem('Auth Key')

        if (userToken) {
            navigate('/React-tailwind-blog/readBlogs')
        }
    }, [])

    const handleRegister = () => {
        if (email && password) {
            let auth = getAuth();

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    localStorage.setItem('User Email', userCredentials.user.email)
                    sessionStorage.setItem('Auth Key', userCredentials.user.accessToken)
                    navigate('/React-tailwind-blog/readBlogs')
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        toast.error("Email already Exists..");
                    }
                })
        }
        else {
            toast.error("Please Enter the Credentials");
        }
    }
    return (
        <div className="card-centered">
            <ToastContainer />
            <Card className="card-body">
                <Card.Content>
                    <Card.Header>Create your account to get started..</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            {/* <Feed.Label image='/images/avatar/small/jenny.jpg' /> */}
                            <Feed.Content>
                                <Form>
                                    <Form.Field>
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeholder='Please Enter your Email'
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            placeholder='Please Enter your Password'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Field>
                                    <div className="btn-centered">
                                        <button
                                            onClick={handleRegister}
                                            class="regiser-btn px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                            Create your account..
                                        </button>
                                        <button
                                            onClick={() => navigate('/React-tailwind-blog/login')}
                                            class="login-btn px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                            Login
                                        </button>
                                    </div>
                                </Form>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>
        </div>
    )
}
