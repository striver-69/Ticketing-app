import express from 'express'
import {json} from 'body-parser'
import {currentUserRouter} from './routes/current-user'

const app=express()
app.use(json())

app.listen(3000,()=>{
  console.log('listening on port 3000!!!')
})