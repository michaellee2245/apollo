import React, { Component } from 'react';
import axios from 'axios';
import './comments.scss';
import $ from 'jquery';
import { connect } from 'react-redux';
import { signInUser } from '../../redux/reducer';

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
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

        this.onDeleteClick = this.onDeleteClick.bind(this)
        this.onUpdateClick = this.onUpdateClick.bind(this)
        this.handleUpdateComment = this.handleUpdateComment.bind(this)
    }



    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log('Username', this.state.username)
        // console.log('Email', this.state.email)
        // console.log('Password', this.state.password)
    }

    newUser = () => {
        axios.post('http://localhost:8080/api/new_user', { username: this.state.username, email: this.state.email, password: this.state.password })
            .then(response => console.log(response))
            .then(this.setState({ username: '', email: '', password: '' }))
    }

    loginUser = () => {
        let theUser = this.state.username;

        if (this.props.user.username !== "") {
            this.setState({ commentName: this.props.user.username })
        }

        axios.post('http://localhost:8080/api/login', { username: theUser, password: this.state.password })
            .then((response) => {
                console.log(response, "*******")
                this.props.updateUser(response.data)
                this.setState({ commentName: response.data.username })
                this.handleCloseLogin()
            })
            .catch((error) => {
                console.log({ error })
                this.setState({ username: '', email: '', password: '' })
            })
    }

    getAllComments = () => {
        axios.get('http://localhost:8080/api/comments')
            .then((response) => {
                console.log(response)
                this.setState({ comments: response.data })
            })
    }
    componentDidMount = () => {
        this.getAllComments()

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
                // username: '',
                email: '',
                password: '',
                leaveCommentClicked: false,
                commentMission: '',
                // commentName: '',
                commentText: ''
            })
    }
    handleLogout = () => {
        axios.get('http://localhost:8080/api/logout')
            .then((response) => {
                this.props.updateUser({})
            })
    }
    leaveComment = () => {
        axios.post('http://localhost:8080/api/leave-comment', { user_name: this.state.commentName, mission: this.state.commentMission, user_comment: this.state.commentText, users_id: this.props.user.id })
            .then((response) => {
                console.log(response)
                this.componentDidMount()
                this.handleCloseLogin()
            })
            .catch((error) => {
                console.error(error)
            })
    }

    onDeleteClick(id) {
        console.log(id, "****** function")
        axios.delete(`http://localhost:8080/api/delete-comment/${id}`)
            .then((response) => {
                console.log(response)
                this.getAllComments();
            })
    }
    handleUpdateComment(id) {
        console.log("function hit", id)
        axios.get(`http://localhost:8080/api/comment/${id}`)
            .then((response) => {

                let comment = response.data[0]
                this.setState({
                    commentMission: comment.mission,
                    commentName: comment.user_name,
                    commentText: comment.user_comment,
                    leaveCommentClicked: true,
                })
                console.log(response.data, "******", this.state)
            })
    }
    onUpdateClick(id) {
        axios.put(`http://localhost:8080/api/update-comment/${id}`, { user_name: this.state.commentName, mission: this.state.commentMission, user_comment: this.state.commentText, user_id: this.props.user.id })
            .then((response) => {
                console.log(response);
                this.getAllComments();
            })
    }
    render() {
        console.log(this.state)
        return (

            <div className="background-container">

                <button className="leave_comment" onClick={this.handleCommentClick}>Leave a Comment</button>
                
                <div className={`leave_comment_container ${this.state.leaveCommentClicked ? "" : "hidden"}`}>
                    <div className="close_login" onClick={this.handleCloseLogin}> </div>
                    <div className="leave_comment_inputs">
                        {/* <label>Username:</label> */}
                        <input name="commentMission" type="text" value={this.state.commentMission || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Email:</label> */}
                        <textarea maxlength="750" name="commentText" type="text" value={this.state.commentText || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Password:</label> */}
                        

                        {this.props.user.username !== "" ?

                            this.props.user.username
                            :
                            <input name="commentName" value={this.state.commentName || ""} onChange={e => this.onInputChange(e)} />
                        }

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

                <div className={`update_comment_container ${this.state.leaveCommentClicked ? "" : "hidden"}`}>
                    <div className="close_login" onClick={this.handleCloseLogin}> </div>
                    <div className="leave_comment_inputs">
                        {/* <label>Username:</label> */}
                        <input name="commentMission" type="text" value={this.state.commentMission || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Email:</label> */}
                        <textarea maxlength="750" name="commentText" type="text" value={this.state.commentText || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Password:</label> */}
                        

                        {this.props.user.username !== "" ?

                            this.props.user.username
                            :
                            <input name="commentName" value={this.state.commentName || ""} onChange={e => this.onInputChange(e)} />
                        }

                    </div>
                    <button onClick={() => this.onUpdateClick()}>Update Comment</button>
                    
                </div>
                {this.state.comments.map((comment) => (
                    <div className="comment_card">
                        <div className="comment_title">{comment.mission}</div>
                        <div className="comment_text">{comment.user_comment}</div>
                        <div className="comment_name">{comment.user_name}</div>
                        {this.props.user.username === comment.user_name ? <button className="delete_comment" onClick={() => this.onDeleteClick(comment.id)}>delete</button> : null}
                        {this.props.user.username === comment.user_name ? <button className="update_comment" onClick={() => this.handleUpdateComment(comment.id)}>update</button> : null}
                    </div>


                    // const deleteComment = (comment) => {
                    //     console.log(comment)
                    // }
                ))}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.username
    }
}
export default connect(mapStateToProps, { signInUser })(Comments);