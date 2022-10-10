import React from 'react'
import './style/App.css'
import Todo from './Todo'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            todos: [
                { name: 'Learn English', done: true },
                { name: 'Gym', done: false },
            ],
        }
    }

    render() {
        const { name, todos } = this.state
        return (
            <div className="main">
                <div className="main__wrapper">
                    <div className="title">
                        <h1>React todo</h1>
                    </div>

                    <div className="input">
                        <div className="input__wrapper">
                            <div className="enter">
                                <input
                                    type="text"
                                    placeholder="todo"
                                    onChange={this.handleSetState}
                                    value={name}
                                />
                            </div>

                            <div className="buuton">
                                <button onClick={this.handleAddTodo}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="todo">
                        {todos.map((todo) => (
                            <Todo
                                name={todo.name}
                                done={todo.done}
                                onDone={this.handleSetDone}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    handleSetState = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleAddTodo = () => {
        const name = this.state.name.trim()

        this.setState({
            todos: this.state.todos.concat({ name, done: false }),
            name: '',
        })
    }
    handleSetDone = (done, name) => {
        this.setState({
            todos: this.state.todos.map((todo) =>
                todo.name === name ? { name, done } : todo
            ),
        })
    }
}

export default App
