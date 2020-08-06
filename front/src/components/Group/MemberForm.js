import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMember } from '../../actions/groups';

export class MemberForm extends Component {
    state = {
        identifier: '',
        debt: 0,
        money: 0,
        group_id: ''
    };

    static propTypes = {
        addMember: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    addDebt = (e) => {
        e.preventDefault();
        this.props.addshare(this.state.group_id, this.state.debt);

    }
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
        const { identifier, group_id, debt, money } = this.state;
        return (
            <div className="card card-body mt-4 mb-4" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>
                <div>
                    <h2>Add Member</h2>
                    <form onSubmit={this.onSubmit} style={{ margin: "0 auto" }}>
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

                <div>
                    <h2>Add to Shared debt wallet:</h2>
                    <form onSubmit={this.addDebt} style={{ margin: "0 auto" }}>
                        <div className="form-group">
                            <label>amount</label>
                            <input
                                className="form-control"
                                type="number"
                                name="debt"
                                onChange={this.onChange}
                                value={debt}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Add
            </button>
                        </div>
                    </form>
                </div>



                <div >
                    <h2>Pay your share of debt wallet:</h2>
                    <form onSubmit={null} style={{ margin: "0 auto" }}>
                        <div className="form-group">
                            <label>amount</label>
                            <input
                                className="form-control"
                                type="number"
                                name="money"
                                onChange={this.onChange}
                                value={money}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Pay
            </button>
                        </div>
                    </form>
                </div>



            </div>
        );
    }
}

export default connect(null, { addMember })(MemberForm);