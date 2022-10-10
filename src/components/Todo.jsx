import React from 'react'
import './style/Todo.css'
export default class Todo extends React.Component {
    render() {
        return (
            <div className="todo">
                <div className="todo__wrapper">
                    <div className="todo_done">
                        <input
                            type="checkbox"
                            checked={this.props.done}
                            onChange={this.handleCheck}
                        />
                    </div>

                    <div className={this.props.done ? 'done' : ''}>
                        <span className="todo_content">{this.props.name}</span>
                    </div>
                </div>
            </div>
        )
    }

    handleCheck = (e) => {
        const done = e.target.checked
        this.props.onDone(done, this.props.name)
    }
}
