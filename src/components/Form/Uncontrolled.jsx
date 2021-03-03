import {Component, createRef} from 'react';

class UncontrolledForm extends Component{

    userRef = createRef();
    messageRef = createRef();

    handleSend = () => {
        const userName = this.userRef.current.value;
        const message = this.messageRef.current.value;
        console.log({userName, message});
    }

    componentDidMount() {
        this.userRef.current.focus()
    }

    render(){
        return (<div>
            <input name="userName" ref={this.userRef}/>
            <input name="message" ref={this.messageRef}/>
            <button onClick={this.handleSend}>Send</button>
        </div>)
    }
}

export {UncontrolledForm}