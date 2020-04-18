import React from 'react';
import "./Newpost.css";

class Newpost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failTitle: false,
            failText: false
        };
    }
    addNewPost = () => {
        var title = document.getElementById("title").value;
        var text = document.getElementById("text").value;
        if (!title) {
            this.setState({
                failTitle: true
            });
        }
        if (!text) {
            this.setState({
                failText: true
            });
        }
        if(title && text){
            alert("New post added!");

        }
    }
    render() {
        return (
            <div className="wrap_newpost">
                <div className="header">
                    <div className="back">
                        <a href="#" onClick={this.props.close}><img src='img/arrow_left.png' /></a>
                    </div>
                    <div>
                        <h1>new post</h1>
                    </div>
                </div>
                <div className="form_newpost">
                    <div className={"form_newpost_input " + (this.state.failTitle ? "input_fail" : "")}><input id={"title"} type={"text"} placeholder={"title"} />
                        {this.state.failTitle ? <p>Field is empty</p> : <p></p>}
                    </div>
                    <div className={"form_newpost_text " + (this.state.failText ? "text_fail" : "")}><textarea id={"text"} placeholder={"text"}></textarea>
                        {this.state.failText ? <p>Field is empty</p> : <p></p>}
                    </div>

                </div>
                <div className="action_wrap">
                    <div className="addpost"><a href="#" onClick={this.addNewPost}><p>add a post</p></a></div>
                    <div className="closepost"><a href="#" onClick={this.props.close}><p>cancel</p></a></div>
                </div>
            </div>

        );
    }

    componentDidMount() {
        this.setState({
            someKey: 'otherValue'
        });
    }
}

export default Newpost;
