
import {Component, Fragment, createRef} from 'react'
import AppBar from '@material-ui/core/AppBar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import {Toolbar, IconButton} from '@material-ui/core';
import {connect} from 'react-redux'
import { push } from 'connected-react-router'
import PropTypes from 'prop-types'


class _Header extends Component{
    static propTypes = {
        nickName: PropTypes.string,
    }

    
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={() => {this.props.push('/');}}
                        >
                            <MailIcon  />
                        </IconButton>
                        <IconButton                     
                            onClick={() => {this.props.push('/profile');}}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        {this.props.nickName}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    nickName: state.profile.nickName,
});


const Header = connect(mapStateToProps, {push})(_Header);


export {Header};