
import {Component, Fragment} from 'react'
import {TextField, Button, Chip} from '@material-ui/core';
import './Messages.css'

const USERTYPES = {
    USER: 'user',
    ROBOT: 'robot',
};


function Message(props) {
    const {text, author} = props;
    return (
        <div className="message">
            <Chip label={text} color={author === USERTYPES.USER ? 'primary' : author === USERTYPES.ROBOT ? 'secondary' : 'default'}/>
        </div>
    )
};

class Messages extends Component {

    state = {
        messages: [{text:'Start to chat',author:'auto generated'},{text:'Start to chat',author:'auto generated'}],
        message: ''
    }

    addMessage = () => {
        this.setState({messages: [...this.state.messages, {text:this.state.message, author: USERTYPES.USER}]});
        this.setState({message: ''})
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate");
        if (this.state.messages.length % 2 === 1){
            setTimeout(()=>{
                this.setState({messages: [...this.state.messages, {text: 'From the robot', author: USERTYPES.ROBOT}]})
            }, 1000)
        }
    }

    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    render() {
        console.log("render", this.state)
        const { messages = [] } = this.state;
      return (
        <Fragment>
            <div className="messages">
                 {messages.map((item, index)=>(
                     <Message key={index} {...item}/>
                ))}
             </div>
             <TextField 
                label="Message" 
                variant="outlined" 
                size="small" 
                value={this.state.message} 
                onKeyPress={(event) => { event.key === 'Enter' ? this.addMessage() : null }} 
                onChange={this.handleChange}
            />
             <Button onClick={this.addMessage} variant="contained">Send Message</Button>
             
        </Fragment>
      );
    }
  }

export {Messages};