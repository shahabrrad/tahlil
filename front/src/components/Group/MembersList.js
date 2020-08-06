import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMembers } from '../../actions/groups';
export class MemberList extends Component {
    state = {
        money2add: [0, 0, 0, 0, 0],
        added_shares: [0, 0, 0, 0, 0],
    }
    static propTypes = {
        members_of_group: PropTypes.array.isRequired,
        shares: PropTypes.array.isRequired,
        getMembers: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getMembers(this.props.group_id);
    }
    componentDidUpdate() {
        this.props.getMembers(this.props.group_id);
    }
    change = (e) => {
        let target = e.target;
        let m2a = this.state.money2add;
        m2a[Number(target.name)] = Number(target.value);
        this.setState({
            money2add: m2a
        })
    }
    submit = (e) => {
        e.preventDefault();
        let target = e.target;
        let as = this.state.added_shares;
        as[Number(target.name)] = as[Number(target.name)] + Number(this.state.money2add[Number(target.name)]);
        this.setState({
            added_shares: as
        })
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
                            <th>share</th>
                            <th>add debt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.members_of_group.map((member) => (
                            <tr key={member.lastName}>
                                <td>{member.firstName}</td>
                                <td>{member.lastName}</td>
                                <td>{Number(Number(this.props.shares[this.props.members_of_group.indexOf(member)]) + Number(this.props.debt / this.props.members_of_group.length) + Number(this.state.added_shares[this.props.members_of_group.indexOf(member)]))}</td>
                                <td>
                                    <form onSubmit={this.submit} style={{ margin: "0 auto" }} name={this.props.members_of_group.indexOf(member)}>
                                        <div className="form-group">
                                            <label>add share of member</label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                name={this.props.members_of_group.indexOf(member)}
                                                onChange={this.change}
                                                value={this.state.money2add[this.props.members_of_group.indexOf(member)]}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">
                                                Add
            </button>
                                        </div>
                                    </form>
                                </td>


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
    shares: state.groups.shares,
});

export default connect(mapStateToProps, { getMembers })(MemberList);