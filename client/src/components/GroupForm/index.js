import React, { Component } from 'react'

class GroupForm extends Component {
    state = {
        groupName: "",
        members: []
    }

    render() {
        return (
                <>
                    <div className="field">
                        <label className="label">Group Name</label>
                        <input class="input" type="text" placeholder="Enter name..." />
                    </div>
                    <div className="field">
                        <label className="label">Members</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Enter members..."></textarea>
                        </div>
                    </div>
                </>
        )
    }
}

export default GroupForm