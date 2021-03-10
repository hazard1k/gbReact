import {Component} from 'react'
import PropTypes from 'prop-types'
import {Header} from '../Header'
 import {ChatList} from '../ChatList'
 import {Messages} from '../Messages'
 import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router'

 class _Layout extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
    }

    render() {
      const {match} = this.props;
      console.log(match)
      return (
          <div>
          <Grid container>
            <Grid item xs={2}>
              <ChatList />
            </Grid>
            <Grid item>
              <Messages currentChat={match.params.chatId}></Messages>
            </Grid>
          </Grid>
        </div>

      )
    }
  };

const Layout = withRouter(_Layout)

export {Layout};