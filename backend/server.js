import express from 'express'
import cors from 'cors'


const app = express()
const port = 3000

// Middleware for CORS
app.use(cors({
    origin: process.env.Client_URL || "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})