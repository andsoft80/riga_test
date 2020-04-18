import React from 'react';
import "./Tileview.css";
import Listcardwhite from './../Listcardwhite/Listcardwhite';

class Tileview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewposts: [],
            allcomments:[],
            isOpen: false
        };
    }
    listchunk = 8;
    more = (e) => {
        e.preventDefault();
        this.setState({

            viewposts: this.props.posts.slice(0, this.state.viewposts.length + this.listchunk)

        });
    }

    commentsForPost = (postId) => {
        var arr = this.state.allcomments;
        const comms = arr.filter(function (post) {
          return post.postId === postId;
        });
        return comms;
      }
    render() {

        return (
            <div className="tv_wrap">
                <div className="tv_container">
                    {
                        this.state.viewposts.map((post) =>
                            <div className="tv_card_wrap">
                                <div>
                                    <img src={"img/stub.png"} />
                                </div>
                                <div className="tv_card_footer">
                                    <div className="tv_card_title">
                                        {post.title}
                                    </div>
                                    <div className="tv_card_arrow">
                                        <Listcardwhite post = {post} comments = {this.commentsForPost(post.id)}/>
                                    </div>

                                </div>
                            </div>

                        )
                    }
                </div>
                <div className="load">
                    <div className="load_inactive">
                        <a href="#" onClick={this.more}><p>load more</p></a>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            viewposts: this.props.posts.slice(0, this.listchunk),
            allcomments: this.props.allcomments
        });
    }
}

export default Tileview;
