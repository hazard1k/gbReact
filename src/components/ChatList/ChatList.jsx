
import {Component, Fragment} from 'react'
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';

class ChatList extends Component {

    state = {
        chats: ["Чат 1","Чат 2","Чат 3","Чат 4","Чат 5",]
    }

    render() {
        const { chats = [] } = this.state;

        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                {chats.map((item, index)=>(
                     <ListItem key={index} button >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
                </List>
          </div>
        )
    }
}


export {ChatList};