import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Badge from '@material-ui/core/Badge';
import moment from 'moment';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

class ChatMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            darkMode: false,
            text: '',
            from: '',
        };
    }

    render() {
        const src = 'https://eu.ui-avatars.com/api/?uppercase=false&name=' +
            this.props.title +
            '+' +
            this.props.title +
            '&rounded=true&size=48';
        let text = this.props.text ? this.props.text : '';
        let from = this.props.from ? this.props.from : '';
        let width = text.length * 4 > 200 ? 200 : text.length * 4;
        width = from.length * 4 > width ? from.length * 4 : width;
        let isReview = this.props.type == 'REVIEW';
        let darkMode = this.props.darkMode;
        width = isReview ? 300 : width;
        width += 150;
        const widthStr = width + 'px';
        const boxWidth = width - 10;
        const boxWidthStr = boxWidth + 'px';
        const textWidth = width - 10;
        const textWidthStr = textWidth + 'px';
        const boxHeight = 65 + (text.length / 45) * 20;
        const boxHeightStr = boxHeight + 'px';
        return (
            <div style={{ width: widthStr }}>
                <div style={{ position: 'relative' }}>
                    <img
                        src={src}
                        style={{
                            marginBottom: '-30px',
                            marginRight: this.props.me ? '100%' : '0%',
                            marginLeft: this.props.me ? '0%' : '90%',
                            width: 48,
                            height: 48,
                            borderRadius: 24,
                            zIndex: -1,
                        }}
                    ></img>
                </div>
                <div
                    style={{
                        backgroundColor: darkMode
                            ? this.props.me
                                ? '#233f78'
                                : '#2d3036'
                            : this.props.me
                                ? '#9ec3ff'
                                : 'white',
                        borderRadius: 10,
                        width: isReview ? widthStr : boxWidthStr,
                        height: isReview ? '470px' : boxHeightStr,
                        marginLeft: '10px',
                        padding: '10px',
                    }}
                >
                    <div
                        style={{
                            // marginRight: '0',
                            // marginTop: '0',
                            flex: '1',
                        }}
                    >
                        <text
                            style={{
                                color: darkMode ? '#04c2cc' : 'darkblue',
                                fontWeight: 'bold',
                            }}
                        >
                            {this.props.from}
                        </text>
                        <br></br>
                         (
                                <text
                            style={{
                                color: darkMode ? 'white' : 'black',
                                textAlign: 'right',
                                alignContent: 'flex-end',
                                width: textWidthStr,
                                float: text.charAt(0).match(/[a-z]/i)
                                    ? 'inline-start'
                                    : 'right',
                            }}
                        >
                            {this.props.text}
                        </text>
                            )
                        <br></br>
                        <Moment
                            fromNow
                            style={{
                                color: darkMode ? '#bdbdbd' : 'gray',
                                padding: '5px',
                            }}
                        >
                            {moment.utc(this.props.date)}
                        </Moment>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatMessage;
