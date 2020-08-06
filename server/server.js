const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

const students = ['T.J.', 'Vince', 'Spinelli', 'Gretchen', 'Gus', 'Mikey']

app.get('/students', (req, res) => res.send(JSON.stringify(students)))

app.listen(port, () => console.log(`Now you can generate ${port} pairs!`))