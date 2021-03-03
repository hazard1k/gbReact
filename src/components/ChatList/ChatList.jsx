
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

function ChatList() {

    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button >
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Чат 1" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Чат 2" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Чат 3" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Чат 4" />
                </ListItem>
            </List>
      </div>
    )
};

export {ChatList};