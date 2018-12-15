import React, { Component } from 'react';
import axios from 'axios';
import './comments.scss';

class Comments extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    }
    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log('Username', this.state.username)
        console.log('Email', this.state.email)
        console.log('Password', this.state.password)
    }

    newUser = () => {
        axios.post('http://localhost:8080/new_user', { username: this.state.username, email: this.state.email, password: this.state.password })
            .then(response => console.log(response))
            .then(this.setState({ username: '', email: '', password: '' }))
    }

    loginUser = () => {
        axios.post('http://localhost:8080/login', { username: this.state.username, password: this.state.password })
            .then((response) => {
                this.props.history.push('/dashboard')

            })
            .catch((error) => {
                console.log({ error })
                this.setState({ username: '', email: '', password: '' })
            })
    }

    render() {
        return (
            <div className="background-container">
                <div className="main-auth-container">
                    <div>Logo</div>
                    <div className="close_login"> </div>
                    <div className="auth-container-inputs">
                        {/* <label>Username:</label> */}
                        <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.onInputChange} />
                        {/* <label>Email:</label> */}
                        <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.onInputChange} />
                        {/* <label>Password:</label> */}
                        <input name="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange} type="password"/>
                    </div>
                    <div>
                        <button onClick={this.loginUser}>Login</button>
                        <button onClick={this.newUser} >Register</button>
                        <div className="close_section"> </div>
                    </div>
                </div>
                <div className="comment_cards">
                    <div className="comment_info">Apollo 8</div>
                </div>
                <div className="comment_cards">
                    <div className="comment_info">Apollo 8</div>
                </div>
                <div className="comment_cards">
                    <div className="comment_info">Apollo 8</div>
                </div>
                {/* <div className="comment_cards">
                    <div className="comment_info">Apollo 8</div>
                </div>
                <div className="comment_cards">
                    <div className="comment_info">Apollo 8</div>
                </div>
                <div className="comment_cards">
                    <div className="comment_info">Apollo 8</div>
                </div> */}
            </div>
        )
    }
}

export default Comments;