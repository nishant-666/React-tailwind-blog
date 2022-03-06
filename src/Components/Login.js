import React, { useState, useEffect } from 'react';
import { Card, Feed, Form, Divider } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleButton from 'react-google-button'
export default function Register() {
    let navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (userData) => {
            if(userData){
                navigate('/readBlogs')
            }
        })
    }, [])

    const authWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem('PhotoURL', result.user.photoURL)
            localStorage.setItem('User Name', result.user.displayName);
            localStorage.setItem('User Email', result.user.email);
            navigate('/readBlogs')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="card-centered">
            <ToastContainer />
            <Card className="card-body">
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            {/* <Feed.Label image='/images/avatar/small/jenny.jpg' /> */}
                            <Feed.Content>
                                <Form>
                                    {/* <Form.Field>
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
                                    </Form.Field> */}
                                    {/* <div className="btn-centered">
                                        <button
                                            onClick={handleRegister}
                                            class="regiser-btn px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                            Sign in..
                                        </button>
                                        <button
                                            onClick={() => navigate('/register')}
                                            class="login-btn px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                            Create your Account..
                                        </button>
                                    </div> */}
                                    {/* <Divider horizontal>Or</Divider> */}
                                    <div className='signup-header'>
                                        <h3>Blogs by Cybernatico</h3>
                                        <p>Sign In to Read Blogs !</p>
                                    </div>
                                    <div className="google-btn">
                                        <GoogleButton
                                           onClick={authWithGoogle}
                                        />
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
