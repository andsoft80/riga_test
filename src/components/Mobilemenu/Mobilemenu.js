import React from 'react';
import './Mobilemenu.css';

class Mobilemenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return (
            <div className="mm_wrap">
                <div className="mm_content">

                    <div className="mm_header">
                        <div className="mm_menu">


                        </div>

                    </div>
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

export default Mobilemenu;
