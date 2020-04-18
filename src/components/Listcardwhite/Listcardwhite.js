import React from 'react';
import "./Listcardwhite.css"
import Dialog from '@material-ui/core/Dialog';
import Listview from './../Listview/Listview'

class Listcardwhite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            screenWidth: null
        };
    }
    fullScreen = (document.body.clientWidth <= '600');
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
    render() {
        const {
            title,
            post,
            comments,

            ...rest
        } = this.props;
        return (
            <div>
                <Dialog
                    maxWidth={'md'}
                    fullScreen={(this.state.screenWidth <= '500')}
                    open={this.state.isOpen}
                >
                    <div>
                        <div className="dialog_wrap">
                            <div className="dialog">
                                <div className="dialog_content">
                                    <h1>{post.title}</h1>
                                    <div className="dialog_body">
                                        <span>{post.body}</span>
                                    </div>
                                </div>
                                <div className="close">
                                    <a href="#" onClick={this.closeDetail}><img src='img/close.png' /></a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="dialog_comments">
                        <div className="dialog_wrap">
                            <div className="dialog_comments_header">
                                <h3>{"comments"}</h3>
                            </div>
                            <Listview posts={comments} onlytitle={false} showbody={true} />
                        </div>

                    </div>

                </Dialog>
                <div className="arrow_white">
                    <a href="#" onClick={this.showDetail}><img src='img/arrow_right_white.png' /></a>
                </div>
            </div>

        );
    }

    resize() {
        this.setState({ screenWidth: window.innerWidth });
        
        
      }
      componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
      }
      componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this))
      }
}

export default Listcardwhite;
