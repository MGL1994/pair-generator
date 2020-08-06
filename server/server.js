const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = 3000

const cohorts = [
    {
        id: 0,
        name: "Third Street", 
        students: [
            {name: "TJ"},
            {name: "Vince"}, 
            {name: "Spinelli"},
            {name: "Gretchen"},
            {name: "Gus"},
            {name: "Mikey"}
        ]
    }
]

// ROOT ROUTE

app.get('/', (req, res) => res.send('TEEJAY!!!'))

// COHORTS ROUTES

app.get('/cohorts', (req, res) => res.send(JSON.stringify(cohorts)))

app.post('/cohorts', (req, res) => {
    const newCohort = req.body
    cohorts.push(newCohort)
    res.send({message: `${newCohort.name} has been added to the register.`})
})

// INDV COHORT ROUTES

app.get('/cohorts/:id', (req, res) => {
    const id = req.params.id
    res.send(JSON.stringify(cohorts[id]))
})

app.listen(port, () => console.log(`Now you can generate ${port} pairs!`))