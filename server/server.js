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
                    {pair: ["TJ", "Vince"]},
                    {pair: ["Spinelli", "Gretchen"]},
                    {pair: ["Gus", "Mikey"]}
                ]
            },
            {
                pairInstance: 1,
                pairs: [
                    {pair: ["TJ", "Mikey"]},
                    {pair: ["Vince", "Spinelli"]},
                    {pair: ["Gretchen", "Gus"]}
                ]
            },
        ]
    }
]

function pairStudents(id) {

    const cohort = cohorts[id]
    let students = cohort.students
    let prevPairInstance = cohort.allPairs[cohort.allPairs.length - 1].pairInstance
    let existingPairs = cohort.allPairs

    // CHECK AMOUNT OF PAIRS

    if(existingPairs.length === (students.length - 2)) {
        existingPairs = []
        prevPairInstance = (-1)
    }

    // REORDER STUDENTS LIST

    let duplicatesCount = 1

    while(duplicatesCount > 0) {

        duplicatesCount = 0

        for(let counter = students.length - 1; counter > 0; counter--) {
            const randomCounter = Math.floor(Math.random() * counter)
            const tempStudentsArray = students[counter]
            students[counter] = students[randomCounter]
            students[randomCounter] = tempStudentsArray
        }

        // CHECK IF PAIRINGS EXIST

        for(let counter = 0; counter < students.length; counter += 2) {
            existingPairs.map(pairInstance => {
                pairInstance.pairs.map(pair => {
                    if(pair.pair.includes(students[counter].name) && pair.pair.includes(students[counter + 1].name)) {
                        duplicatesCount += 1
                    }
                })
            })
        }
    }

    // CREATE NEW PAIRINGS

    cohort.allPairs.push({
        pairInstance: prevPairInstance + 1,
        pairs : [
            {pair: [students[0].name, students[1].name]},
            {pair: [students[2].name, students[3].name]},
            {pair: [students[4].name, students[5].name]},
        ]
    })

    console.log(`existing pairs = ${existingPairs.length}`, `students = ${students.length - 2}`)

    return existingPairs
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