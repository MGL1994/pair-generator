import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchGroups } from '../../actions/groupsActions'
import { GroupCard, GroupForm } from '../../components'

const Groups = ({ dispatch, loading, groups, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchGroups())
    }, [dispatch])

const renderGroups = () => {
    if (loading) return <p>Loading groups...</p>
    if (hasErrors) return <p>Unable to display groups.</p>
    return groups.map((group) => <GroupCard key={group.id} group={group} />)
}
    
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
                    {renderGroups()}
                </div>
            </section>
            <GroupForm />
        </>
    )
}

const mSTP = (state) => ({
    loading: state.groups.loading,
    groups: state.groups.groups,
    hasErrors: state.groups.hasErrors,
})

export default connect(mSTP)(Groups)