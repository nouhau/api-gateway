
import express, { Response, Request, NextFunction } from 'express'
import cors from 'cors'
import { mappingRouter } from './routes/mapping.routes'
import { userRouter } from './routes/user.routes'

const server = express()
server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 5000

server.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response.status(400).json({
      error: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

server.use(function (request: Request, response: Response, next: NextFunction) {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

server.use(
  mappingRouter,
  userRouter
)

server.listen(PORT, () => {
  console.log(`Server on port ${PORT} \nhttp://localhost:${PORT}`)
})
