
import {Component, Fragment, createRef} from 'react'
import AppBar from '@material-ui/core/AppBar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import {Toolbar, IconButton} from '@material-ui/core';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
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
                        component={NavLink}
                        to="/"
                        color="inherit"
                        >
                        <MailIcon />
                        </IconButton>
                        <IconButton
                        // onClick={handleMenu}
                        component={NavLink}
                        to="/profile"
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


const Header = connect(mapStateToProps, {})(_Header);


export {Header};