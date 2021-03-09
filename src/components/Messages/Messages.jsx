
import {Component, Fragment, createRef} from 'react'
import {TextField, Button, Chip, Paper} from '@material-ui/core';
import './Messages.css'

const USERTYPES = {
    USER: 'user',
    ROBOT: 'robot',
};


function Message(props) {
    const {text, author} = props;
    return (
        <div className="message" align={author === USERTYPES.ROBOT ? "right" : "left" }>
            <Chip label={text} color={author === USERTYPES.USER ? 'primary' : author === USERTYPES.ROBOT ? 'secondary' : 'default'}/>
        </div>
    )
};

class Messages extends Component {

    state = {
        messages: [{text:'Start to chat',author:'auto generated'},{text:'Start to chat',author:'auto generated'}],
        message: ''
    }

    messagesField =  createRef();

    addMessage = () => {
        this.setState({messages: [...this.state.messages, {text:this.state.message, author: USERTYPES.USER}]});
        this.setState({message: ''})
    }
    
    componentDidUpdate(_, prevState){
        if (
            prevState.messages.length !== this.state.messages.length &&
            this.state.messages.length % 2 === 1
        ){
            setTimeout(()=>{
                this.setState({messages: [...this.state.messages, {text: 'From the robot', author: USERTYPES.ROBOT}]})
            }, 1000)
        }

        this.messagesField.current.scrollTop = this.messagesField.current.scrollHeight;
    }

    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    render() {
      const { messages = [] } = this.state;
      return (
        <Fragment>
            <Paper className="messages" ref={this.messagesField}>
                {messages.map((item, index)=>(
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
             
        </Fragment>
      );
    }
  }

export {Messages};