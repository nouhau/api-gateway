import { Router, Response, Request, NextFunction } from 'express'
import httpProxy from 'express-http-proxy'

const userRouter = Router()
const userProxy = httpProxy('http://localhost:5011/')

const handle = (request: Request, response: Response, next: NextFunction) => {
  userProxy(request, response, next)
}

userRouter.post('/user', handle)
userRouter.post('/login', handle)

export { userRouter }
