import React, { Component } from 'react';
import Slider from 'react-slick';
import './comment_carousel.scss';
import '../Comments/comments.scss';

class CommentCarousel extends Component {



    render() {
        const settings = {
            
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            centerPadding: "10px",
            variableWidth: true,
            focusOnSelect: true,
            swipeToSlide: true,
            // nextArrow: <CustomNextArrow />,
            // prevArrow: <CustomPrevArrow />
        };
        // var carouselIndex = this.state.comments.map(function (comment) {
        //     return (
        //         <div className="comment_card" key={comment.id}>
        //             <div className="comment_title">{comment.mission}</div>
        //             <div className="comment_text">{comment.user_comment}</div>
        //             <div className="comment_name">{comment.user_name}</div>
        //             {this.props.user.username === comment.user_name ? <button className="delete_comment" onClick={() => this.onDeleteClick(comment.id)}>delete</button> : null}
        //             {this.props.user.username === comment.user_name ? <button className="update_comment" onClick={() => this.handleUpdateComment(comment.id)}>update</button> : null}
        //         </div>
        //     );
        // })
        return (
            <div >




                <Slider {...settings}>
                    
                    
                        {/* {this.props.comments.map((comment) => (

                            <div className="comment_card" >
                                <div className="comment_title">{comment.mission}</div>
                                <div className="comment_text">{comment.user_comment}</div>
                                <div className="comment_name">{comment.user_name}</div>
                                {this.props.user.username === comment.user_name ? <button className="delete_comment" onClick={() => this.onDeleteClick(comment.id)}>delete</button> : null}
                                {this.props.user.username === comment.user_name ? <button className="update_comment" onClick={() => this.handleUpdateComment(comment.id)}>update</button> : null}
                            </div>
                        ))} */}
                    
                </Slider>


            </div>

        );
    }
}

export default CommentCarousel;