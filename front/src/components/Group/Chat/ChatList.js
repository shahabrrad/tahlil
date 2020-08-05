import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ChatMessage from './ChatMessage';

class ChatList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: this.props.messages,

            listItems: this.listItems,
        };
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        var listItems = this.props.messages.map((message) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: message.showMeInRight ? 'flex-end' : 'none',
                    paddingTop: '2px',
                }}
            >
                <ChatMessage
                    from={message.from}
                    id={message.id}
                    avatar={message.avatar}
                    date={message.date}
                    text={message.message}
                    type={message.type}
                    me={message.showMeInRight}
                ></ChatMessage>
            </div>
        ));
        return (
            <div>
                <List>{listItems}</List>
                <div
                    style={{ float: 'left', clear: 'both' }}
                    ref={(el) => {
                        this.messagesEnd = el;
                    }}
                ></div>
            </div>
        );
    }
}

export default ChatList;
