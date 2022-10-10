import React from 'react'
import './style/App.css'
import Todo from './Todo'
import Info from './Info'

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
                    <div className="total">
                        <Info
                            total={todos.length}
                            doneCount={todos.filter((todo) => todo.done).length}
                        />
                    </div>
                    <div className="input">
                        <div className="input__wrapper">
                            <div className="enter">
                                <input
                                    type="text"
                                    onChange={this.handleSetState}
                                    value={name}
                                />
                            </div>

                            <div className="button">
                                <button
                                    onClick={this.handleAddTodo}
                                    disabled={this.state.name.trim() === ''}
                                    className="save"
                                >
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
                                onDelete={this.handleDelete}
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

        if (name === '') return

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

    handleDelete = (name) =>
        this.setState({
            todos: this.state.todos.filter((todo) => todo.name !== name),
        })
}

export default App
