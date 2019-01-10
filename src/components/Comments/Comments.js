import React, { Component } from 'react';
import axios from 'axios';
import './comments.scss';
// import $ from 'jquery';
import { connect } from 'react-redux';
import { signInUser } from '../../redux/reducer';
import Slider from 'react-slick';
// import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
// import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

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



    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log('Username', this.state.username)
        // console.log('Email', this.state.email)
        // console.log('Password', this.state.password)
    }

    newUser = () => {
        axios.post('/api/new_user', { username: this.state.username, email: this.state.email, password: this.state.password })
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

        axios.post('/api/login', { loginUsername: theUser, loginPassword: this.state.loginPassword })
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
        axios.get('/api/comments')
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
        // $('.carousel-content').slick({
        //     prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/shoe_story/arrow-left.png'>",
        //     nextArrow:"<img class='a-right control-c next slick-next' src='../images/shoe_story/arrow-right.png'>"
        // });

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
        axios.get('/api/logout')
            .then((response) => {
                this.props.updateUser({})
            })
    }
    leaveComment = () => {
        axios.post('/api/leave-comment', { user_name: this.state.commentName, mission: this.state.commentMission, user_comment: this.state.commentText, users_id: this.props.user.id })
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
        axios.delete(`/api/delete-comment/${id}`)
            .then((response) => {
                console.log(response)
                this.getAllComments();
            })
    }
    handleUpdateComment(id) {
        console.log("function hit", id)
        axios.get(`/api/comment/${id}`)
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
        axios.put(`/api/update-comment/${id}`, { user_name: this.state.commentName, mission: this.state.commentMission, user_comment: this.state.commentText, user_id: this.props.user.id })
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



    render() {

        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            slidesToShow: 3,
            speed: 500,
            // nextArrow: <ArrowLeft/>,
            // prevArrow: <ArrowRight/>,
            arrows: true,

            draggable: true,
            // variableWidth: true,
            responsive: [{ breakpoint: 500, settings: { autoplay: true, slidesToShow: 1 } }],
        }

        // const carouselIndex = this.state.comments.map(function (comment) {
        //     console.log(this.state.comments)
        //     return (

        //             <div className="comment_card" key={comment.id}>
        //                 <div className="comment_title">{comment.mission}</div>
        //                 <div className="comment_text">{comment.user_comment}</div>
        //                 <div className="comment_name">{comment.user_name}</div>
        //                 {this.props.user.username === comment.user_name ? <button className="delete_comment" onClick={() => this.onDeleteClick(comment.id)}>delete</button> : null}
        //                 {this.props.user.username === comment.user_name ? <button className="update_comment" onClick={() => this.handleUpdateComment(comment.id)}>update</button> : null}
        //             </div>

        //     );
        // })

        return (
            <div className="background-container">



                <button className="leave_comment" onClick={() => this.handleCommentClick()}>Leave a Comment</button>

                <div className={`leave_comment_container ${this.state.leaveCommentClicked ? "" : "hidden"}`}>
                    <div className="close_login" onClick={() => this.handleCloseLogin()}> </div>
                    <div className="leave_comment_inputs">
                        {/* <label>Username:</label> */}
                        <input name="commentMission" placeholder="Favorite Mission" type="text" autoComplete="off" value={this.state.commentMission || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Email:</label> */}
                        <textarea maxLength="750" name="commentText" placeholder="Let us know why it was your favorite!" type="text" value={this.state.commentText || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Password:</label> */}
                        <input name="commentName" placeholder="First Name" autoComplete="off" value={this.state.commentName || ""} onChange={e => this.onInputChange(e)} />

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
                            <input name="loginUsername" type="text" placeholder="Username" autoComplete="off" value={this.state.loginUsername} onChange={this.onInputChange} />
                            <input name="loginPassword" placeholder="Password" autoComplete="off" value={this.state.loginPassword} onChange={this.onInputChange} type="password" />
                            <button onClick={this.loginUser} className="login_buttons">Login</button>
                        </div>

                        <div className="vertical_line"></div>

                        <div className="auth-container-inputs">

                            {/* <label>Username:</label> */}
                            <input name="username" type="text" placeholder="Username" autoComplete="off" value={this.state.username} onChange={this.onInputChange} />
                            {/* <label>Email:</label> */}
                            <input name="email" type="text" placeholder="Email" autoComplete="off" value={this.state.email} onChange={this.onInputChange} />
                            {/* <label>Password:</label> */}
                            <input name="password" placeholder="Password" autoComplete="off" value={this.state.password} onChange={this.onInputChange} type="password" />
                            <button onClick={this.newUser} className="login_buttons">Register</button>
                        </div>

                        <div className="close_login" onClick={this.handleCloseLogin}> </div>
                    </div>
                </div>
                <div className={`update_comment_container ${this.state.updateCommentClicked ? "" : "hidden"}`}>
                    <div className="close_login" onClick={() => this.handleCloseUpdate()}> </div>
                    <div className="leave_comment_inputs">
                        {/* <label>Username:</label> */}
                        <input name="commentMission" type="text" autoComplete="off" value={this.state.commentMission || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Email:</label> */}
                        <textarea maxLength="750" name="commentText" type="text" autoComplete="off" value={this.state.commentText || ""} onChange={e => this.onInputChange(e)} />
                        {/* <label>Password:</label> */}


                        {this.props.user.username !== "" ?

                            this.props.user.username
                            :
                            <input name="commentName" placeholder="something" type="text" autoComplete="off" value={this.state.commentName || ""} onChange={e => this.onInputChange(e)} />
                        }

                    </div>
                    <button className="submit_comment" onClick={() => this.onUpdateClick(this.state.idToUpdate)}>Update Comment</button>

                </div>
                {/* <div className="comment_carousel_container"></div> */}
                {/* {this.state.comments.map((comment) => (

                    <div className="comment_card">
                        <div className="comment_title">{comment.mission}</div>
                        <div className="comment_text">{comment.user_comment}</div>
                        <div className="comment_name">{comment.user_name}</div>
                        <div className="comment_btn_container">
                            {this.props.user.username === comment.user_name ? <button className="delete_comment" onClick={() => this.onDeleteClick(comment.id)}>delete</button> : null}
                            {this.props.user.username === comment.user_name ? <button className="update_comment" onClick={() => this.handleUpdateComment(comment.id)}>update</button> : null}
                        </div>
                    </div>
                ))} */}

                <div className="carousel_container">
                    <Slider {...settings} >


                        {this.state.comments.map((comment) => (

                            <div className="comment_card" >
                                {/* <div className="comment_inside"> */}
                                    <div className="comment_title">{comment.mission}</div>
                                    <div className="comment_text">{comment.user_comment}</div>
                                    <div className="comment_name">{comment.user_name}</div>
                                    {this.props.user.username === comment.user_name ? <button className="delete_comment" onClick={() => this.onDeleteClick(comment.id)}>delete</button> : null}
                                    {this.props.user.username === comment.user_name ? <button className="update_comment" onClick={() => this.handleUpdateComment(comment.id)}>update</button> : null}
                                
                            </div>
                        ))}

                    </Slider>
                </div>

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