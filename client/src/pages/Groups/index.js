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
        <div>
            <h1>Groups</h1>
            {renderGroups()}
        </div>
    )
}

const mSTP = (state) => ({
    loading: state.groups.loading,
    groups: state.groups.groups,
    hasErrors: state.groups.hasErrors,
})

export default connect(mSTP)(Groups)