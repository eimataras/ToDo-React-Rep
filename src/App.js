import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'
import axios from 'axios'

class App extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/todo/all')
            .then(res => {
                console.log(res)
                this.setState({
                    todos: res.data
                })
            })
    }

    // componentDidMount() {
    //     fetch('http://localhost:8080/todo/all')
    //         .then(res => res.json())
    //         .then(todos => this.setState({todos}))
    // }

    deleteTodo = (id) => {
        axios.delete('http://localhost:8080/todo/delete', {params: {id: id}})
        .then(res => console.log(res))

        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });
        this.setState({
            todos: todos
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos: todos
        })
    }

    render() {
        return (
            <div className="App container">
                <h1 className="center red-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo addTodo={this.addTodo}/>

            </div>
        );
    }
}

export default App;