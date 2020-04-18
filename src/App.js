import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bigcard from "./components/Bigcard/Bigcard"
import Listview from "./components/Listview/Listview"
import Newpost from "./components/Newpost/Newpost"
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Tileview from './components/Tileview/Tileview'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: false,
      screenWidth: null,
      showMobileMenu: false,
      tileView: false
    };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  posts = this.props.posts;
  comments = this.props.comments;
  first_posts = this.posts.slice(0, 3);
  commentsForPost = (postId) => {
    var arr = this.comments;
    const comms = arr.filter(function (post) {
      return post.postId === postId;
    });
    return comms;
  }

  showMobileMenu = () => {
    this.setState({
      showMobileMenu: true

    });

  }

  showTileView = (e) => {
    e.preventDefault();
    this.setState({
      tileView: true

    });

  }

  closeTileView = (e) => {
    e.preventDefault();
    this.setState({
      tileView: false

    });

  }


  closeMobileMenu = () => {
    this.setState({
      showMobileMenu: false

    });
  }

  showNewPost = (e) => {
    e.preventDefault();
    this.setState({
      newPost: true

    });


  }

  showMain = (e) => {
    e.preventDefault();
    this.setState({
      newPost: false

    });

  }
  render() {
    return (
      <div className="App">
        <Drawer anchor={"top"} open={this.state.showMobileMenu} >
          <div className="mm_wrap">
            <div className="mm_content">

              <div className="mm_header">
                <div >
                  <img src="img/logo_white.png" />
                </div>
                <div className="mm_close">
                  <img src="img/close.png" onClick={this.closeMobileMenu} />
                </div>


              </div>
              <div className="mm_menu">
                <div className="mm_home" onClick={(e) => { this.closeMobileMenu(e); this.showMain(e); }}>
                  {"home"}
                </div>
                <div className="mm_newpost" onClick={(e) => { this.closeMobileMenu(e); this.showNewPost(e); }}>
                  {"new post"}
                </div>

              </div>
            </div>
          </div>
        </Drawer>
        <header className="App-header">
          <div >
            <img src="img/logo.jpg" />
          </div>
          {(this.state.screenWidth >= '500')
            ?


            <div className="header_menu">
              {
                !this.state.newPost
                  ?
                  <div className="header_menu">
                    <div className="header_menu_active">
                      <a href="#"><p>home</p></a>
                    </div>
                    <div className="header_menu_inactive">
                      <a href="#" onClick={this.showNewPost}><p>new post</p></a>
                    </div>
                  </div>
                  :
                  <div className="header_menu">
                    <div className="header_menu_inactive">
                      <a href="#" onClick={this.showMain}><p>home</p></a>
                    </div>
                    <div className="header_menu_active">
                      <a href="#" onClick={this.showNewPost}><p>new post</p></a>
                    </div>
                  </div>
              }

            </div>
            :
            <div className="header_menu">
              <MenuIcon fontSize={"large"} onClick={this.showMobileMenu} />
            </div>


          }




        </header>
        {!this.state.newPost
          ?
          <div className="main">
            <div className="wrap">
              <div className="Carousel">

                {this.first_posts.map((post) =>
                  <Bigcard title={post.title} post={post} comments={this.commentsForPost(post.id)} />
                )}
                {/* <Bigcard title={"Заголовок ghjgjhgj ghjgjhgjhgjhgjhgjhg yuiyiuyiuyiuyi"} /> */}
              </div>
            </div>
            {/* <div className="switcher"> */}

              {!this.state.tileView
                ?
                <div className="switcher">
                  <div className="switcher_menu_active">
                    <a href="#" onClick={this.closeTileView}><p>list</p></a>
                  </div>
                  <div className="switcher_menu_inactive">
                    <a href="#" onClick={this.showTileView}><p>tiles</p></a>
                  </div>
                </div>
                :
                <div className="switcher">
                  <div className="switcher_menu_inactive">
                    <a href="#" onClick={this.closeTileView}><p>list</p></a>
                  </div>
                  <div className="switcher_menu_active">
                    <a href="#" onClick={this.showTileView}><p>tiles</p></a>
                  </div>
                </div>
              }


            {/* </div> */}


            { 
               !this.state.tileView
               ?
              <div className="view">
                <Listview posts={this.posts} allcomments={this.comments} onlytitle={true} showbody={false} />
              </div>
              :
              <div className="view">
                <Tileview posts={this.posts}  allcomments={this.comments}/>
              </div>
            }


          </div>
          :
          <div className="newPost">
            <Newpost close={this.showMain} />
          </div>
        }
        <div className="footer">
          <div>
            © 2020
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

export default App;
