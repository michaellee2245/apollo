import React, { Component } from 'react';
import axios from 'axios';
import './comments.scss';
import $ from 'jquery';

class Comments extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        loginClicked: false,
        comments: [],
        leaveCommentClicked: false,
        commentMission: '',
        commentText: '',
        commentName: ''
    }
    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log('Username', this.state.username)
        // console.log('Email', this.state.email)
        // console.log('Password', this.state.password)
    }

    newUser = () => {
        axios.post('http://localhost:8080/new_user', { username: this.state.username, email: this.state.email, password: this.state.password })
            .then(response => console.log(response))
            .then(this.setState({ username: '', email: '', password: '' }))
    }

    loginUser = () => {
        axios.post('http://localhost:8080/login', { username: this.state.username, password: this.state.password })
            .then((response) => {
                console.log(response)
                this.props.updateUser(response.data)
                this.handleCloseLogin()
            })
            .catch((error) => {
                console.log({ error })
                this.setState({ username: '', email: '', password: '' })
            })
    }
    componentDidMount = () => {
        axios.get('http://localhost:8080/comments')
            .then((response) => {
                console.log(response)
                this.setState({ comments: response.data })
            })

        // $("textarea").resizable();
    }
    handleLoginClick = () => {
        console.log(this.state)
        this.setState({ loginClicked: true })
    }
    handleCommentClick = () => {
        this.setState({ leaveCommentClicked: true })
    }
    handleCloseLogin = () => {
        this.setState(
            { 
                loginClicked: false, 
                username: '', 
                email: '', 
                password: '', 
                leaveCommentClicked: false,
                commentMission: '',
                commentName: '',
                commentText:''
            })
    }
    handleLogout = () => {
        axios.get('http://localhost:8080/logout')
            .then((response) => {
                this.props.updateUser({})
            })
    }
    leaveComment = () => {
        axios.post('http://localhost:8080/leave-comment', {user_name:this.state.commentName, mission:this.state.commentMission, user_comment:this.state.commentText, users_id:this.props.user.id})
        .then((response) => {
            console.log(response)
            this.componentDidMount()
            this.handleCloseLogin()
        })
        .catch((error) => {
            console.error(error)
        })
    }
    render() {
        return (

            <div className="background-container">

                <button className="leave_comment" onClick={this.handleCommentClick}>Leave a Comment</button>
                <div className={`leave_comment_container ${this.state.leaveCommentClicked ? "" : "hidden"}`}>
                    <div className="close_login" onClick={this.handleCloseLogin}> </div>
                    <div className="leave_comment_inputs">
                        {/* <label>Username:</label> */}
                        <input name="commentMission" type="text" placeholder="Favorite Apollo Mission" value={this.state.commentMission} onChange={this.onInputChange} />
                        {/* <label>Email:</label> */}
                        <textarea maxlength="750" name="commentText" type="text" placeholder="Why was this your favorite mission?" value={this.state.commentText} onChange={this.onInputChange} />
                        {/* <label>Password:</label> */}
                        <input name="commentName" placeholder="First Name" value={this.state.commentName} onChange={this.onInputChange} />
                    </div>
                    <button onClick={this.leaveComment}>Submit Comment</button>
                </div>

                {this.props.user.id ?
                    <button className="login_button" onClick={this.handleLogout}>Logout</button>
                    :
                    <button className="login_button" onClick={this.handleLoginClick}> Login</button>
                }
                <div
                    className={`main-auth-container ${
                        this.state.loginClicked ? "" : "hidden"
                        }`}
                    onKeyDown={({ key }) => key === "Enter" && this.loginUser()}
                >
                    {/* <div>Logo</div> */}
                    <div className="close_login"> </div>
                    <div className="auth-container-inputs">
                        {/* <label>Username:</label> */}
                        <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.onInputChange} />
                        {/* <label>Email:</label> */}
                        <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.onInputChange} />
                        {/* <label>Password:</label> */}
                        <input name="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange} type="password" />
                    </div>
                    <div>
                        <button onClick={this.loginUser}>Login</button>
                        <button onClick={this.newUser} >Register</button>
                        <div className="close_login" onClick={this.handleCloseLogin}> </div>
                    </div>
                </div>

                {this.state.comments.map((comment) => (
                    <div className="comment_card">
                        <div className="comment_title">{comment.mission}</div>
                        <div className="comment_text">{comment.user_comment}</div>
                        <div className="comment_name">{comment.user_name}</div>
                    </div>
                ))}

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