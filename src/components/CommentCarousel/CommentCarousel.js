import React, { Component } from 'react';
import Slider from 'react-slick';
import './comment_carousel.scss';
import '../Comments/comments.scss';

class CommentCarousel extends Component {



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