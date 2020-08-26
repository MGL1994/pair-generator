import React from 'react'

export default function ({ group }) {
    return (
        <div className="column is-one-quarter">
            <div className="box has-background-primary has-text-centered">
                <h2 className="subtitle has-text-white">{group.name}</h2>
            </div>
        </div>
    )
}   