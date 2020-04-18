import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class Postdetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            post: {},
        };

    }

    render() {
        return (
            <Dialog
                open={this.state.isOpen}
            // onClose={handleClose}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>

            </Dialog>

        );
    }

    componentDidMount() {
        // this.setState({
        //     isOpen: this.props.isOpen,
        // });
    }

}

export default Postdetail;
