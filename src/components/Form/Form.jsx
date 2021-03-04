import {Component} from 'react';

class Form extends Component{

    state = {
        userName: '',
        message: '',
    }


    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    someWork = () => {
        console.log("Submit");
    }

    handleSubmit = (event) => {
        event.preventDefault();
      
    }

    handleKeyUp = (event) => {
        if (event.key == 'Enter') {
            this.someWork();
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="userName" 
                    value={this.state.userName} 
                    onChange={this.changeHandler}
                    onKeyUp={this.handleKeyUp}
                />
                <input name="message" value={this.state.message} onChange={this.changeHandler}/>
                
            </form>
        )
    }
}

export {Form}