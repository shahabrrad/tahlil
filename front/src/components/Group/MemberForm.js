import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMember } from '../../actions/groups';

export class MemberForm extends Component {
    state = {
        identifier: '',
        group_id: ''
    };

    static propTypes = {
        addMember: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { identifier, group_id } = this.state;
        const member = { identifier };
        this.props.addMember(member, group_id);
        this.setState({
            identifier: ''
        });
    };

    render() {
        this.state.group_id = this.props.group_id;
        const { identifier, group_id } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Member</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Identifier (email)</label>
                        <input
                            className="form-control"
                            type="email"
                            name="identifier"
                            onChange={this.onChange}
                            value={identifier}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
            </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addMember })(MemberForm);