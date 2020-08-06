import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { update_profile } from '../../actions/auth';
export class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            //token: this.props.token,
            firstName: '',
            lastName: '',
        };
    }
    static propTypes = {
        update_profile: PropTypes.func.isRequired,
        user: PropTypes.any,
    };
    handleFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value });
    };

    handleLastNameChange = (e) => {
        this.setState({ lastName: e.target.value });
    };

    handleCancel = () => {
        this.setState({ open: false });
    };

    handleClose = () => {
        //console.log('HERE');
        const profile = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };
        this.props.update_profile(profile);
        this.setState({ open: false });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }



    render() {
        return (
            <div>
                <Tooltip title="Update profile">
                    <IconButton color="inherit" onClick={this.handleClickOpen}>
                        <AccountCircleIcon></AccountCircleIcon>
                    </IconButton>
                </Tooltip>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                // aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Update Profile
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To create new group, We need your user info
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="firstName"
                            label="First name"
                            defaultValue={this.props.firstName}
                            type="name"
                            fullWidth
                            required={true}
                            onChange={(e) => this.handleFirstNameChange(e)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="lastName"
                            label="Last name"
                            defaultValue={this.props.lastName}
                            type="name"
                            fullWidth
                            onChange={(e) => this.handleLastNameChange(e)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCancel} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { update_profile })(UpdateProfile);
//export default UpdateProfile
