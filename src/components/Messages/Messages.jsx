
import {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
class Message extends Component {
    render() {
        const {text, author} = this.props
        return <div>{text} [{author}]</div>
    }
};

class Messages extends Component {

    state = {
        messages: [{text:'Hello world',author:'auto generated'}, {text:'Hello', author:'auto generated'}]
    }

    addMessage = () => {
        this.setState({messages: [...this.state.messages, {text:'Yahoo!', author:'user'}]});
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate");
        if (this.state.messages.length % 2 === 1){
            setTimeout(()=>{
                this.setState({messages: [...this.state.messages, {text: 'From the robot', author:'robot'}]})
            }, 1000)
        }
    }

    render() {
        console.log("render", this.state)
        const { messages = [] } = this.state;
      return (
        <Fragment>
            <div className="messages">
                 {messages.map((item, index)=>(
                     <Message key={index} text={item.text} author={item.author}/>
                ))}
             </div>

             <button onClick={this.addMessage}>Send Message</button> 
        </Fragment>
      );
    }
  }

export {Messages};