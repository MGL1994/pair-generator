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
        ],
        allPairs:[ 
            {
                pairInstance: 0,
                pairs: [
                    {pairOne: ["TJ", "Vince"]},
                    {pairTwo: ["Spinelli", "Gretchen"]},
                    {pairThree: ["Gus", "Mikey"]}
                ]
            },
            {
                pairInstance: 1,
                pairs: [
                    {pairOne: ["TJ", "Mikey"]},
                    {pairTwo: ["Vince", "Spinelli"]},
                    {pairThree: ["Gretchen", "Gus"]}
                ]
            },
        ]
    }
]

function pairStudents(id) {

    const cohort = cohorts[id]
    const students = cohort.students
    const prevPairInstance = cohort.allPairs[cohort.allPairs.length - 1].pairInstance

    for(let counter = students.length - 1; counter > 0; counter--) {
        const randomCounter = Math.floor(Math.random() * counter)
        const tempStudentsArray = students[counter]
        students[counter] = students[randomCounter]
        students[randomCounter] = tempStudentsArray
      }

    cohort.allPairs.push({
        pairInstance: prevPairInstance + 1,
        pairs : [
            {pairOne: [students[0].name, students[1].name]},
            {pairTwp: [students[2].name, students[3].name]},
            {pairThree: [students[4].name, students[5].name]},
        ]
    })

    const allPairs = cohort.allPairs

    return allPairs

}

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

// PAIR ROUTES

app.get('/cohorts/:id/pairs', (req, res) => {
    const id = req.params.id
    res.send(JSON.stringify(pairStudents(id)))
})

app.listen(port, () => console.log(`Now you can generate ${port} pairs!`))