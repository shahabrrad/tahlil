import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGroups, deleteGroup } from '../../actions/groups';
import MemberForm from './MemberForm';
import GroupDetails from './GroupDetails';
export class GroupList extends Component {
    state = {
        selected_group: ''
    }
    static propTypes = {
        groups: PropTypes.array.isRequired,
        getGroups: PropTypes.func.isRequired,
        deleteGroup: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getGroups();
    }

    selectGroup = (e) => this.setState({ selected_group: e.target.id });

    render() {
        return (
            <Fragment>
                <h2>Groups</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.groups.map((group) => (
                            <tr key={group.id}>
                                <td>{group.id}</td>
                                <td>{group.title}</td>
                                <td>email</td>
                                <td>message</td>
                                <td>
                                    {/*<button
                                        onClick={this.props.deleteGroup.bind(this, group.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        {' '}
                    Delete
                                    </button>*/}
                                </td>
                                <td>
                                    <button
                                        id={group.id}
                                        onClick={this.selectGroup}
                                        className="btn btn-danger btn-sm"
                                    >

                                        Details
                                    </button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                {this.state.selected_group !== '' ? <GroupDetails group_id={this.state.selected_group} /> : <div />}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    groups: state.groups.groups,
});

export default connect(mapStateToProps, { getGroups, deleteGroup })(GroupList);