
import {Component} from 'react'
import {TextField, Button, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {addChat as addChatToStore} from '../../Redux/actions/chatAction'

class _ChatList extends Component {

    
    static propTypes = {
        rooms: PropTypes.array.isRequired,
        addChatToStore: PropTypes.func.isRequired,
    }

    state = {
        chatName: '',
    }

    addChat = () => {
        this.props.addChatToStore(this.state.chatName)
        //this.setState({chats: [...this.state.chats, this.state.chatName]});

        //this.setState({messages: [...this.state.messages, {text:this.state.message, author: USERTYPES.USER}]});
        this.setState({chatName: ''})
    }

    handleChange = (event) => {
        this.setState({chatName: event.target.value})
    }
    
    render() {
      //  const { chats = [] } = this.state;

        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                {this.props.rooms.map((item, index)=>(
                    <ListItem key={index} to={`/chat/${index}`} button component={NavLink} activeClassName="Mui-selected">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
                </List>

                <TextField 
                        label="ChatName" 
                        variant="outlined" 
                        size="small" 
                        value={this.state.chatName} 
                        onKeyPress={(event) => { event.key === 'Enter' ? this.addChat() : null }} 
                        onChange={this.handleChange}
                    />
                    <Button className="sendButton" onClick={this.addChat} variant="contained">Add chat</Button>
          </div>
        )
    }
}


const mapStateToProps = (state) => ({
    rooms: state.chat.rooms,
});


const ChatList = connect(mapStateToProps, {addChatToStore})(_ChatList);

export {ChatList};