import React, { Component } from 'react'
import GroupList from './GroupList';
import Form from './Form';
export default function GroupsPage() {
    return (
        <div style={{ marginTop: '64px' }}>
            <Form />
            <GroupList />
        </div>
    )

}

