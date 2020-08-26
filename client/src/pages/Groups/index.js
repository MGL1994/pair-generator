import React, { useEffect, Component } from 'react'
import { connect } from 'react-redux'

import { GroupCard, GroupForm } from '../../components'

import { fetchGroups } from '../../actions/groupsActions'

class Groups extends Component {

    componentDidMount = () => this.fetchGroups()

    fetchGroups = () => this.props.fetchGroups()

    renderGroups = () => {
        if (this.props.loading) return <p>Loading groups...</p>
        if (this.props.hasErrors) return <p>Unable to display groups.</p>
        return this.props.groups.map((group) => <GroupCard key={group.id} group={group} />)
    }
    
    render() {
        return (
            <>
                <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container">
                            <nav className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <h1 className="title">Groups</h1>
                                    </div>
                                </div>
                                <div className="level-right">
                                    <div className="level-item">
                                        <button className="button">Add</button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="columns">
                        {this.renderGroups()}
                    </div>
                </section>
                <GroupForm />
            </>
        )
    }
}

const mSTP = (state) => ({
    loading: state.groups.loading,
    groups: state.groups.groups,
    hasErrors: state.groups.hasErrors,
})

export default connect(mSTP, { fetchGroups })(Groups)