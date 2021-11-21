import React, { useState } from 'react';
import { Card, Feed, Form } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
       
    }
    return (
        <div className="card-centered">
            <Card className="card-body">
                <Card.Content>
                    <Card.Header>Sign In to get started..</Card.Header>
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
                                            onClick={handleLogin}
                                            class="regiser-btn px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                            Sign in..
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
