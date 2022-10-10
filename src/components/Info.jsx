import React from 'react'
import './style/Info.css'


export default class Info extends React.Component {
    render() {
        const { total, doneCount } = this.props
        return (
            <div className="info">
                <div className="stat">All: {total}</div>
                <div className="stat">Done: {doneCount}</div>
                <div className="stat">Left: {total-doneCount}</div>
            </div>
        )
    }
}
