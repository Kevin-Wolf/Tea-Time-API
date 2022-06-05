const express = require('express')
const app = express()
const PORT = 8000


const tea = {
    'oolong':{
    'type':'black',
    'origin': 'yo mommas house',
    'waterTemp':200,
    'caffinated':true,
    'steepTimeSeconds': 190,
    'flavor': 'delicious'
    

    },

    'matcha':{
        'type':'green',
        'origin': 'yo mommas house',
        'waterTemp':245,
        'caffinated':true,
        'steepTimeSeconds': 180,
        'flavor': 'delicious'

    },
    'unknown':{
        'type':'unknown',
        'origin': 'unknown',
        'waterTemp':0,
        'caffinated':'unknown',
        'steepTime': 'unknown'
        }
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

