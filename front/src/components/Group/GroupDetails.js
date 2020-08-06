import React, { Component } from 'react'
import MemberForm from './MemberForm';
import MembersList from './MembersList';
import ChatList from './Chat/ChatList'
export class GroupDetails extends Component {
    state = {
        message: '',
        createdClient: null,
        money2share: 0,
    }
    addDebt(id, money) {
        this.setState({
            money2share: money
        });
    }
    /*createClient() {
            const socket = () => new SockJS(urls.socketUrl);
    
            createdClient = new Client({
                webSocketFactory: socket,
                reconnectDelay: 0,
                connectHeaders: {
                    login: {},
                    passcode: this.state.token,
                },
                heartbeatIncoming: 5000,
                heartbeatOutgoing: 5000,
                debug: (text) => console.log(text),
                onConnect: this.refreshGroups,
                onDisconnect: this.setState({ subscribed: false }),
                // onWebSocketClose,
            });
    
            createdClient.activate();
    
            this.setState({ createdClient: createdClient });
            return createdClient;
        }
        handleTextChange = (e) => {
            this.setState({ message: e.target.value });
        };
        handleEnter = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleSend();
            }
        };*/
    render() {

        return (
            <div>
                <MemberForm group_id={this.props.group_id} addshare={this.addDebt.bind(this)} />
                <MembersList group_id={this.props.group_id} debt={this.state.money2share} />
                {/* <ChatList messages={this.state.messages} />
                <div
                                style={{
                                    width: '80%',
                                    position: 'absolute',
                                    flexDirection: 'row-reverse',
                                    bottom: 0,
                                    background: this.state.darkMode
                                        ? '#00626f'
                                        : '#77848A',
                                }}
                            >
                                <TextField
                                    fullWidth
                                    style={{
                                        // float: 'left',
                                        textAlign: 'right',
                                        flex: '1',
                                    }}
                                    value={this.state.message}
                                    id="message"
                                    label="Press enter to send"
                                    name="message"
                                    disabled={this.state.selectedGroupId === ''}
                                    onChange={(e) => this.handleTextChange(e)}
                                    onKeyPress={(e) => this.handleEnter(e)}
                                    InputLabelProps={classes.textin
                                    }
                                    InputProps={
                                             classes.textin
                                    }
                                ></TextField>
                                </div>*/}
            </div>
        )
    }
}

export default GroupDetails
