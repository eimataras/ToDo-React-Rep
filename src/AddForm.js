import React, {Component} from "react";
import axios from 'axios';

class AddTodo extends Component {

    state = {
        label: ''
    }

    handleChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:8080/todo/add', this.state)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
        this.props.addTodo(this.state);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.label}/>
                </form>
            </div>
        )
    }
}

export default AddTodo