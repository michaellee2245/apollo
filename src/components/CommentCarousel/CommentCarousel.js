import React, { Component } from 'react';
import Slider from 'react-slick';
import './comment_carousel.scss';
import '../Comments/comments.scss'

class CommentCarousel extends Component {

    constructor(props){
        super(props);

        this.state={
            comments: [],
            commentMission: '',
            commentText: '',
            commentName: '',
        }
    }
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "150px",
            slidesToShow: 2,
            speed: 1000,
            arrows: true,
            focusOnSelect: true,
        };
        return (
            <div className="comment_carousels">

                <Slider {...settings}>

                    {this.state.comments.map((comment) => (

                        <div className="comment_card">
                            <div className="comment_title">{comment.mission}</div>
                            <div className="comment_text">{comment.user_comment}</div>
                            <div className="comment_name">{comment.user_name}</div>
                            {this.props.user.username === comment.user_name ? <button className="delete_comment" onClick={() => this.onDeleteClick(comment.id)}>delete</button> : null}
                            {this.props.user.username === comment.user_name ? <button className="update_comment" onClick={() => this.handleUpdateComment(comment.id)}>update</button> : null}
                        </div>
                    ))}

                </Slider>


                <h2>Center Mode</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default CommentCarousel;