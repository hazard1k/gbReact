
import {Component, Fragment, createRef} from 'react'
import {TextField, Button, Chip, Paper} from '@material-ui/core';
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {sendMessage, deleteMessage} from '../../Redux/actions/messageAction'
import { USERTYPES } from '../../Redux/constants/userTypes'

import './Messages.css'

function Message(props) {
    const {id, text, author, chatId, onDelete} = props;
    const handleDelete = () => {
        console.log('clicked delete')
        console.log('onDelete',onDelete)
        onDelete(id)
      };
    return (
        <div className="message" align={author === USERTYPES.ROBOT ? "right" : "left" }>
            <Chip onDelete={handleDelete} label={text} color={author === USERTYPES.USER ? 'primary' : author === USERTYPES.ROBOT ? 'secondary' : 'default'}/>
        </div>
    )
};

class _Messages extends Component {

    static propTypes = {
        currentChat: PropTypes.number,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        deleteMessage: PropTypes.func.isRequired,
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
  
    deleteMessage = (messageId) =>{
        const {currentChat} = this.props; 
        this.props.deleteMessage(currentChat, messageId)
    }

    componentDidUpdate(){
        if (this.messagesField.current ){
            this.messagesField.current.scrollTop = this.messagesField.current.scrollHeight;       
        }
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
                        {messages[chatId] && messages[chatId].map((item)=>(
                            <Message key={item.id} {...item} chatId={chatId} onDelete={this.deleteMessage}/>
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


  const Messages = connect(mapStateToProps, {sendMessage, deleteMessage})(_Messages);

export {Messages};