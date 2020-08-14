import React from 'react'

export const Group = ({ group }) => (
    <div>
        <h1>{group.name}</h1>
        {group.students.map(student => <li>{student.name}</li>)}
    </div>
)