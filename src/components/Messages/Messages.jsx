
import React from 'react'

class Message extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return <div>{this.props.text}</div>
    }
};

class Messages extends React.Component {
    constructor(props) {
      super(props);
      const {messages = []} = props
      this.state = {messages: messages, message: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    Message(props) {
            return <div>{props.text}</div>
        };

    handleChange(event) {
        this.setState(state => ({
            message: event.target.value
        }));
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.state.messages.push(this.state.message)
        this.setState(state => ({
            messages: state.messages,
            message: ''
        }));
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Имя:
                <input type="text" value={this.state.message} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Добавить" />
        </form>
            <div className="messages">
                 {this.state.messages.map((item, index)=>(
                     <Message key={index} text={item}/>
             ))}
             </div>
        </div>
      );
    }
  }

export {Messages};