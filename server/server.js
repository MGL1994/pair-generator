const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = 3000

const students = [
    {name: "T.J."},
    {name: "Vince"}, 
    {name: "Spinelli"},
    {name: "Gretchen"},
    {name: "Gus"},
    {name: "Mikey"}
]

app.get('/', (req, res) => res.send('TEEJAY!!!'))

app.get('/students', (req, res) => res.send(JSON.stringify(students)))

app.post('/students', (req, res) => {
    const newStudent = req.body
    students.push(newStudent)
    res.send({message: `${newStudent.name} has been added to the register.`})
})

app.listen(port, () => console.log(`Now you can generate ${port} pairs!`))