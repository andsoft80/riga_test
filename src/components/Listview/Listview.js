import React from 'react';
import "./Listview.css";
import Dialog from '@material-ui/core/Dialog';
import Listcard from './../Listcard/Listcard';

class Listview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allposts: [],
            allcomments: [],
            viewposts: [],
            showbody: false,
            onlytitle: true,
            isOpen: false





        };

    }
    listchunk = 8;
    str = "";
    more = (e) => {
        e.preventDefault();
        this.setState({

            viewposts: this.props.posts.slice(0, this.state.viewposts.length + this.listchunk)

        });
    }
    showDetail = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: true
        });
    }
    closeDetail = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false
        });
    }
    commentsForPost = (postId) =>{
        var arr = this.state.allcomments;
        
        const comms =  arr.filter(function(post){
          return post.postId === postId;
        });
        return comms;
      }

    render() {
        return (
            <div className = "list-wrap">

                {
                    this.state.viewposts.map((post) =>

                        <div className='list-post'>

                            <div>
                                {
                                    this.state.onlytitle
                                        ?
                                        < h1 >
                                            {post.title}
                                        </h1>
                                        :

                                        <div className="commenttitle">  {post.name + "  (" + post.email + ")"}</div>



                                }
                                {
                                    this.state.showbody
                                        ?
                                        <p>{post.body}</p>
                                        :
                                        <p></p>
                                }
                            </div>
                            {
                                !this.state.showbody
                                    ?
                                    <div className="arrow">
                                        <Listcard post = {post} comments = {this.commentsForPost(post.id)}/>
                                    </div>
                                    
                                    :
                                    <div></div>
                            }
                        </div>
                    )

                }
                <div className="load">
                    <div className="load_inactive">
                        <a href="#" onClick={this.more}><p>load more</p></a>
                    </div>
                </div>
            </div >
        );
    }

    componentDidMount() {
        this.setState({
            allposts: this.props.posts,
            allcomments: this.props.allcomments,
            viewposts: this.props.posts.slice(0, this.listchunk),
            onlytitle: this.props.onlytitle,
            showbody: this.props.showbody,

        });
    }
}

export default Listview;
