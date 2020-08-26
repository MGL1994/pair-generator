import React, { Component } from 'react'

class GroupForm extends Component {
    state = {
        groupName: "",
        members: []
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="field">
                        <label className="label">Group Name</label>
                        <input className="input" type="text" placeholder="Enter name..." />
                    </div>
                    <div className="field">
                        <label className="label">Members</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Enter members..."></textarea>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        )
    }
}

export default GroupForm