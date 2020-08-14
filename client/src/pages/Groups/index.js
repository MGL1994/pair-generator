import React, { Component } from 'react'
import axios from 'axios'

class Groups extends Component {
    constructor() {
        super()

        this.state = {
            groups: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/cohorts')
        .then(res => {
            this.setState({ groups: res.data })
        })
    }


    render() {
        return (
            <>
                <h1>Groups</h1>
                {this.state.groups.map(group => <div key={group.id}>{group.name}</div>)}
            </>
        )
    }
}

export default Groups