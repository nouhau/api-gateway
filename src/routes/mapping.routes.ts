import { Router, Response, Request, NextFunction } from 'express'
import httpProxy from 'express-http-proxy'
import 'dotenv/config'

const mappingRouter = Router()
const mappingProxy = httpProxy(process.env.MAPPING_API_URL)

const handle = (request: Request, response: Response, next: NextFunction) => {
  mappingProxy(request, response, next)
}

mappingRouter.get('/skills', handle)
mappingRouter.post('/skills', handle)
mappingRouter.get('/records/:peopleId', handle)
mappingRouter.get('/matrix', handle)
mappingRouter.get('/evaluation', handle)
mappingRouter.post('/matrix', handle)
mappingRouter.put('/mappingnote', handle)
mappingRouter.get('/mappingnote/:peopleId', handle)
mappingRouter.get('/evidences', handle)
mappingRouter.post('/evidences', handle)
mappingRouter.put('/evaluatornote', handle)
mappingRouter.get('/evaluatornote/:peopleId', handle)

export { mappingRouter }
