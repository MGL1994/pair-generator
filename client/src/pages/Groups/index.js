import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchGroups } from '../../actions/groupsActions'
import { Group } from '../../components/Group'

const Groups = ({ dispatch, loading, groups, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchGroups())
    }, [dispatch])

const renderGroups = () => {
    if (loading) return <p>Loading groups...</p>
    if (hasErrors) return <p>Unable to display groups.</p>
    return groups.map((group) => <Group key={group.id} group={group} />)
}
    
    return (
        <>
            <section className="hero is-info">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Groups</h1>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="columns">
                    {renderGroups()}
                </div>
            </section>
        </>
    )
}

const mSTP = (state) => ({
    loading: state.groups.loading,
    groups: state.groups.groups,
    hasErrors: state.groups.hasErrors,
})

export default connect(mSTP)(Groups)