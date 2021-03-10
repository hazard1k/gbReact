
import {Component, Fragment, createRef} from 'react'
import {TextField, Button, Chip, Paper} from '@material-ui/core';
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {sendMessage} from '../../Redux/actions/messageAction'
import { USERTYPES } from '../../Redux/constants/userTypes'

import './Messages.css'

function Message(props) {
    const {text, author} = props;
    return (
        <div className="message" align={author === USERTYPES.ROBOT ? "right" : "left" }>
            <Chip label={text} color={author === USERTYPES.USER ? 'primary' : author === USERTYPES.ROBOT ? 'secondary' : 'default'}/>
        </div>
    )
};

class _Messages extends Component {

    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    }

    state = {
        message: ''
    }

    messagesField =  createRef();

    addMessage = (msg = '', author = '') => {
        const {currentChat} = this.props; 

        const msgToSend = msg.length ? msg : this.state.message;
        const authorToSend = author.length ? author : USERTYPES.USER;
        
        msgToSend && this.props.sendMessage(msgToSend, authorToSend, currentChat)

        this.setState({message: ''})
    }
  
    componentDidUpdate(prevProps){
        const {currentChat} = this.props; 

        if (
            prevProps.messages[currentChat]?.length !== this.props.messages[currentChat]?.length &&
            this.props.messages[currentChat]?.length % 2 === 1
        ){
            setTimeout(()=>{
                this.addMessage('From the robot', USERTYPES.ROBOT)
            }, 1000)
        }

        this.messagesField.current.scrollTop = this.messagesField.current.scrollHeight;
        
    }

    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    render() {
      const { 
          messages = {}, 
          currentChat : chatId,
        } = this.props;
      
      return (
        <Fragment>
            {
                this.props.currentChat && (
                <>
                    <Paper className="messages" ref={this.messagesField}>
                        {messages[chatId] && messages[chatId].map((item, index)=>(
                            <Message key={index} {...item}/>
                        ))}
                    </Paper> 
                    <TextField 
                        label="Message" 
                        variant="outlined" 
                        size="small" 
                        value={this.state.message} 
                        onKeyPress={(event) => { event.key === 'Enter' ? this.addMessage() : null }} 
                        onChange={this.handleChange}
                    />
                    <Button className="sendButton" onClick={this.addMessage} variant="contained">Send Message</Button>
                </>)
            }
            
             
             
        </Fragment>
      );
    }
  }


  const mapStateToProps = (state) => ({
      messages: state.chat.messages,
  });


  const Messages = connect(mapStateToProps, {sendMessage})(_Messages);

export {Messages};