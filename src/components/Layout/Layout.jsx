
 import {Header} from '../Header'
 import {ChatList} from '../ChatList'
 import {Messages} from '../Messages'
 import Grid from '@material-ui/core/Grid';
 // ChatList, Header и MessageField
 function Layout(props) {
    const {text, author} = props;
    return (
        <div>
        <Grid container>
          <Grid item xs={12}>
            <Header></Header>
          </Grid>
          <Grid item xs={2}>
            <ChatList />
          </Grid>
          <Grid item>
          <Messages></Messages>
          </Grid>
        </Grid>
      </div>

    )
};

export {Layout};