import React from 'react'

export const Group = ({ group }) => (
    <div className="column is-one-quarter">
        <div className="box has-background-primary has-text-centered">
            <h2 className="subtitle has-text-white">{group.name}</h2>
        </div>
    </div>
)