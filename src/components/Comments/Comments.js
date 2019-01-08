import React, { Component } from 'react';
import axios from 'axios';
import './comments.scss';
// import $ from 'jquery';
import { connect } from 'react-redux';
import { signInUser } from '../../redux/reducer';
// import './alice-carousel.scss';
// import AliceCarousel from 'react-alice-carousel'

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            loginClicked: false,
            comments: [],
            updateCommentClicked: false,
            leaveCommentClicked: false,
            commentMission: '',
            commentText: '',
            commentName: '',
            idToUpdate: null,
            loginUsername: '',
            loginPassword: '',
            // currentIndex: 0,
        }

        this.onDeleteClick = this.onDeleteClick.bind(this)
        this.onUpdateClick = this.onUpdateClick.bind(this)
        this.handleUpdateComment = this.handleUpdateComment.bind(this)
    }
    // slideTo = (i) => this.setState({ currentIndex: i });

    // onSlideChanged = (e) => this.setState({ currentIndex: e.comments });

    // slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    // slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });


    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log('Username', this.state.username)
        // console.log('Email', this.state.email)
        // console.log('Password', this.state.password)
    }

    newUser = () => {
        axios.post('http://localhost:8080/api/new_user', { username: this.state.username, email: this.state.email, password: this.state.password })
            .then(response => console.log(response))
            .then(this.setState({ username: '', email: '', password: '', loginClicked: false }))
            // .then(this.loginUser())
            .catch((error) => console.error('Error making new user', error))
    }

    loginUser = () => {
        let theUser = this.state.loginUsername;

        if (this.props.user.username !== "") {
            this.setState({ commentName: this.props.user.username })
        }

        axios.post('http://localhost:8080/api/login', { loginUsername: theUser, loginPassword: this.state.loginPassword })
            .then((response) => {
                console.log(response, "*******")
                this.props.updateUser(response.data)
                this.setState({ commentName: response.data.username })
                this.handleCloseLogin()
            })
            .catch((error) => {
                console.log({ error })
                this.setState({ loginUsername: '', loginEmail: '', loginPassword: '' })
            })
    }

    getAllComments = () => {
        axios.get('http://localhost:8080/api/comments')
            .then((response) => {
                console.log(response)
                this.setState({ comments: response.data })
            })
            .catch((error) => {
                console.log('front-end error', error)
            })
    }
    componentDidMount = () => {
        this.getAllComments()

        // this.carouselSlides()

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
                email: '',
                password: '',
                leaveCommentClicked: false,
                commentMission: '',
                commentText: '',
                loginPassword: '',
                loginUsername: '',
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
                    updateCommentClicked: true,
                    idToUpdate: id
                })
                console.log(response.data, "******", this.state)
            })
    }
    onUpdateClick(id) {
        console.log("id", id)
        axios.put(`http://localhost:8080/api/update-comment/${id}`, { user_name: this.state.commentName, mission: this.state.commentMission, user_comment: this.state.commentText, user_id: this.props.user.id })
            .then((response) => {
                console.log(response);
                this.getAllComments();
                this.handleCloseLogin();
            })
            .catch((error) => {
                console.error(error)
            })
    }
    handleCloseUpdate = () => {
        this.setState(
            {
                commentMission: '',
                commentName: '',
                commentText: '',
                updateCommentClicked: false,
            }
        )
    }

    // renderGallery = () => {
    //     const { currentIndex, comments } = this.state;

    //     return (<AliceCarousel
    //         dotsDisabled={true}
    //         buttonsDisabled={true}
    //         slideToIndex={currentIndex}
    //         onSlideChanged={this.onSlideChanged}
    //     >
    //         {comments.map((comment, i) =>
    //             <div key={i} className="comment_carousel">
    //                 <div className="comment_title">{comment.mission}</div>
    //                 <div className="comment_text">{comment.user_comment}</div>
    //                 <div className="comment_name">{comment.user_name}</div>
    //                 {this.props.user.username === comment.user_name ? <button className="delete_comment" onClick={() => this.onDeleteClick(comment.id)}>delete</button> : null}
    //                 {this.props.user.username === comment.user_name ? <button className="update_comment" onClick={() => this.handleUpdateComment(comment.id)}>update</button> : null}
    //             </div>)}
    //     </AliceCarousel>);
    // }
    render() {
        console.log(this.state)
        return (
            <div className="background-container">
                {/* <Script
                    url="https://unpkg.com/flickity@2.1.2/dist/flickity.pkgd.min.js"
                    onCreate={this.handleScriptCreate.bind(this)}
                    onError={this.handleScriptError.bind(this)}
                    onLoad={this.handleScriptLoad.bind(this)}
                /> */}


                <button className="leave_comment" onClick={() => this.handleCommentClick()}>Leave a Comment</button>

                <div className={`leave_comment_container ${this.state.leaveCommentClicked ? "" : "hidden"}`}>
                    <div className="close_login" onClick={() => this.handleCloseLogin()}> </div>
                    <div className="leave_comment_inputs">
                        {/* <label>Username:</label> */}
                        <input name="commentMission" placeholder="Favorite Mission" type="text" value={this.state.commentMission || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Email:</label> */}
                        <textarea maxLength="750" name="commentText" placeholder="Let us know why it was your favorite!" type="text" value={this.state.commentText || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Password:</label> */}
                        <input name="commentName" placeholder="First Name" value={this.state.commentName || ""} onChange={e => this.onInputChange(e)} />

                        {/* {this.props.user.username !== "" ?

                            this.props.user.username
                            :
                            <input name="commentName" value={this.state.commentName || ""} onChange={e => this.onInputChange(e)} />
                        } */}

                    </div>
                    <button onClick={() => this.leaveComment()} className="submit_comment">Submit Comment</button>

                </div>
                {this.props.user.id ?
                    <div className="welcome_message" >{`Welcome ${this.props.user.username}`}</div>
                    :
                    null
                }
                {this.props.user.id ?
                    <button className="login_button" onClick={() => this.handleLogout()}>Logout</button>
                    :
                    <button className="login_button" onClick={() => this.handleLoginClick()}> Login/Register</button>
                }
                <div
                    className={`main-auth-container ${
                        this.state.loginClicked ? "" : "hidden"
                        }`}
                    onKeyDown={({ key }) => key === "Enter" && this.loginUser()}
                >
                    <div className="register_info">Registering allows you to delete or update comments that you leave.</div>
                    <div className="login_wrapper">
                        <div className="close_login"> </div>
                        <div className="login_container_inputs">
                            <input name="loginUsername" type="text" placeholder="Username" value={this.state.loginUsername} onChange={this.onInputChange} />
                            <input name="loginPassword" placeholder="Password" value={this.state.loginPassword} onChange={this.onInputChange} type="password" />
                            <button onClick={this.loginUser} className="login_buttons">Login</button>
                        </div>

                        <div className="vertical_line"></div>

                        <div className="auth-container-inputs">

                            {/* <label>Username:</label> */}
                            <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.onInputChange} />
                            {/* <label>Email:</label> */}
                            <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.onInputChange} />
                            {/* <label>Password:</label> */}
                            <input name="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange} type="password" />
                            <button onClick={this.newUser} className="login_buttons">Register</button>
                        </div>

                        <div className="close_login" onClick={this.handleCloseLogin}> </div>
                    </div>
                </div>
                <div className={`update_comment_container ${this.state.updateCommentClicked ? "" : "hidden"}`}>
                    <div className="close_login" onClick={() => this.handleCloseUpdate()}> </div>
                    <div className="leave_comment_inputs">
                        {/* <label>Username:</label> */}
                        <input name="commentMission" type="text" value={this.state.commentMission || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Email:</label> */}
                        <textarea maxLength="750" name="commentText" type="text" value={this.state.commentText || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Password:</label> */}


                        {this.props.user.username !== "" ?

                            this.props.user.username
                            :
                            <input name="commentName" placeholder="something" type="text" value={this.state.commentName || ""} onChange={e => this.onInputChange(e)} />
                        }

                    </div>
                    <button className="submit_comment" onClick={() => this.onUpdateClick(this.state.idToUpdate)}>Update Comment</button>

                </div>
                {/* <div className="comment_carousel_container"></div> */}
                {this.state.comments.map((comment) => (

                    <div className="comment_card">
                        <div className="comment_title">{comment.mission}</div>
                        <div className="comment_text">{comment.user_comment}</div>
                        <div className="comment_name">{comment.user_name}</div>
                        <div className="comment_btn_container">
                            {this.props.user.username === comment.user_name ? <button className="delete_comment" onClick={() => this.onDeleteClick(comment.id)}>delete</button> : null}
                            {this.props.user.username === comment.user_name ? <button className="update_comment" onClick={() => this.handleUpdateComment(comment.id)}>update</button> : null}
                        </div>
                    </div>
                ))}


                {/* <div className="comment_carousel_container">
                    <div className="comment_card">
                        {this.renderGallery()}
                    </div>
                </div> */}

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