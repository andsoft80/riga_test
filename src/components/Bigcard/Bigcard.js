import React from 'react';
import "./Bigcard.css";
import Postdetail from "./../Postdetail/Postdetail";
import Dialog from '@material-ui/core/Dialog';
import Listview from './../Listview/Listview';


class Bigcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      screenWidth: null
    };
    

        
  }


  // fullScreen = (this.state.screenWidth <= '500');
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
        {/* <Postdetail isOpen={this.state.isOpen}/> */}
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
                    {post.body}
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
              <Listview posts={this.props.comments} onlytitle={false} showbody={true} />
            </div>

          </div>

        </Dialog>
        <div className="card">
          <div className="card_container">
            <h1>{title}</h1>
            <div className="card_footer">
              <a href="#" onClick={this.showDetail}><span>read more</span></a>
            </div>
          </div>
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

export default Bigcard;
