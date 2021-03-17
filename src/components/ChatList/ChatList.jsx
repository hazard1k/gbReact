
import {Component} from 'react'
import {TextField, Button, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction,IconButton} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { push } from 'connected-react-router'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {addChat as addChatToStore, deleteChat} from '../../Redux/actions/chatAction'

class _ChatList extends Component {

    
    static propTypes = {
        rooms: PropTypes.array.isRequired,
        addChatToStore: PropTypes.func.isRequired,
        deleteChat: PropTypes.func.isRequired,
    }

    state = {
        chatName: '',
    }

    addChat = () => {
        this.props.addChatToStore(this.state.chatName)
        this.setState({chatName: ''})
    }

    handleChange = (event) => {
        this.setState({chatName: event.target.value})
    }
    
    handleDelete = (chatId) => {
        console.log("delete chat clicked",chatId)
        this.props.deleteChat(chatId);
        this.props.push('/')
    }

    render() {
        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                {this.props.rooms.map((item)=>(
                    <ListItem key={item.id} to={`/chat/${item.id}`} button component={NavLink} activeClassName="Mui-selected">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => { this.handleDelete(item.id) }}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
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


const ChatList = connect(mapStateToProps, {addChatToStore, deleteChat, push})(_ChatList);

export {ChatList};