import React, { Component } from 'react'
import MemberForm from './MemberForm';
import MembersList from './MembersList';
export class GroupDetails extends Component {
    render() {
        return (
            <div>
                <MemberForm group_id={this.props.group_id} />

                <MembersList group_id={this.props.group_id} />
            </div>
        )
    }
}

export default GroupDetails
