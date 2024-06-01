import { Context, Hono } from 'hono'
import { compress, cors, logger, secureHeaders } from 'hono/middlewares'
import api from './api/index.ts'
import { customLogger } from './logger.ts'
import middlewares from './middlewares.ts'
import { TestKV } from './supa/index.ts'

const app = new Hono().basePath('/v1')

app.use('*', compress())
app.use('*', cors())

if (Deno.env.get('ENV') !== 'test') {
  app.use('*', logger(customLogger))
}

app.use('*', secureHeaders())

app.get('/', (c: Context) =>
  c.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  }))
app.get('/testkv', async (c: Context) => {
  c.json(await TestKV())
})

app.route('/api', api)

app.notFound(middlewares.notFound)

export default app
