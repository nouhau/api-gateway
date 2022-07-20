import { Router, Response, Request, NextFunction } from 'express'
import httpProxy from 'express-http-proxy'
import 'dotenv/config'

const userRouter = Router()
const userProxy = httpProxy(process.env.USER_API_URL)

const handle = (request: Request, response: Response, next: NextFunction) => {
  userProxy(request, response, next)
}

userRouter.post('/user', handle)
userRouter.get('/user/:userId', handle)
userRouter.post('/login', handle)
userRouter.get('/students', handle)
userRouter.get('/students/company/:companyId', handle)

export { userRouter }
