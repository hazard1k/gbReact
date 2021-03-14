import {Component, Fragment, createRef} from 'react'
import {Card, CardActions,CardContent, Button, TextField } from '@material-ui/core';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import {changeNick} from '../../Redux/actions/profileAction'

import './Profile.css'

class _Profile extends Component {
    
    static propTypes = {
        nickName: PropTypes.string,
        changeNick: PropTypes.func.isRequired,
    }

    state = {
        newNickName: ''
    }

    changeName = () => {
        this.state.newNickName && this.props.changeNick(this.state.newNickName)

        this.setState({newNickName: ''})
    }

    handleChange = (event) => {
        this.setState({newNickName: event.target.value})
    }

    render() {
        return (
            <div>
                <Card className="profileCard">
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Редактирование профиля пользователя
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {this.props.nickName}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <TextField 
                            label="Enter Nick name" 
                            variant="outlined" 
                            size="small" 
                            value={this.state.newNickName} 
                            onKeyPress={(event) => { event.key === 'Enter' ? this.changeName() : null }} 
                            onChange={this.handleChange}
                        />
                        <Button size="small" onClick={this.changeName} variant="contained">Изменить ник</Button>
                    </CardActions>
                </Card>
          </div>
        )
    }
}


const mapStateToProps = (state) => ({
    nickName: state.profile.nickName,
});


const Profile = connect(mapStateToProps, {changeNick})(_Profile);


export {Profile}