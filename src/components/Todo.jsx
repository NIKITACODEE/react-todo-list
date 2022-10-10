import React from 'react'
import './style/Todo.css'
export default class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHover: false,
        }
    }
    render() {
        const { done, name } = this.props
        return (
            <div
                className={`todo__container ${done ? 'done' : ''}`}
                onMouseEnter={this.handleMouseHover(true)}
                onMouseLeave={this.handleMouseHover(false)}
            >
                <div className="container__wrapper">
                    <div className="todo__input">
                        <input
                            type="checkbox"
                            checked={done}
                            onChange={this.handleCheck}
                        />
                    </div>
                    <div className="todo__name">
                        <span>{name}</span>
                    </div>
                </div>
                <div className="todo__delete">
                    {this.state.isHover && (
                        <button className="delete" onClick={this.handleDelete}>
                            <span role="img">&#10006;</span>
                        </button>
                    )}
                </div>
            </div>
        )
    }

    handleCheck = (e) => {
        const done = e.target.checked
        this.props.onDone(done, this.props.name)
    }

    handleDelete = () => this.props.onDelete(this.props.name)

    handleMouseHover = (isHover) => () => this.setState({ isHover })
}
