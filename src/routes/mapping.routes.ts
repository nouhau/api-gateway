import { Router, Response, Request, NextFunction } from 'express'
import httpProxy from 'express-http-proxy'

const mappingRouter = Router()
const mappingProxy = httpProxy('http://localhost:5010/')

const handle = (request: Request, response: Response, next: NextFunction) => {
  mappingProxy(request, response, next)
}

mappingRouter.get('/skills', handle)
mappingRouter.post('/skills', handle)
mappingRouter.get('/records', handle)
mappingRouter.get('/matrix', handle)
mappingRouter.get('/evaluation', handle)
mappingRouter.post('/matrix', handle)
mappingRouter.put('/mapping', handle)
mappingRouter.get('/evidences', handle)
mappingRouter.post('/evidences', handle)
mappingRouter.put('/evaluator', handle)

export { mappingRouter }
