const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('frontend'))

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/homepage.html'))
//res.sendFile
//res.json
app.get('/login', (req, res) => res.send('login'))

 var student={ "name":"being zero",
                "college":"Vnrvjiet",
                "regno":"123445"    
};
app.get('/register', (req, res) => res.send('register!'))

app.get('/data',(req,res)=> res.json(student))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))