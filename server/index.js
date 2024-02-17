const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        user : 'hello',
        array : [
            {
                id : 1,
                name : "Egg"
            },
            {
                id : 2,
                name : "Gee"
            },
        ]
    })
})


app.listen(process.env.PORT,()=>{
    console.log(`Server running in port ${process.env.PORT}`);
})