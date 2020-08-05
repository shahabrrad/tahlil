import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMembers } from '../../actions/groups';
export class MemberList extends Component {
    static propTypes = {
        members_of_group: PropTypes.array.isRequired,
        getMembers: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getMembers(this.props.group_id);
    }

    render() {
        return (
            <Fragment>
                <h2>Members</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.members_of_group.map((member) => (
                            <tr key={member.lastName}>
                                <td>{member.firstName}</td>
                                <td>{member.lastName}</td>
                                <td>email</td>
                                <td>message</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    members_of_group: state.groups.members_of_group,
});

export default connect(mapStateToProps, { getMembers })(MemberList);