import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addGroup } from '../../actions/groups';

export class Form extends Component {
    state = {
        title: ''
    };

    static propTypes = {
        addGroup: PropTypes.func.isRequired,
        user: PropTypes.any
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        const group = { "title": title, lastName: this.props.user };
        //console.log("group");
        this.props.addGroup(group);
        this.setState({
            title: ''
        });
    };

    render() {
        const { title } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Create Group</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={title}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
            </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addGroup })(Form);