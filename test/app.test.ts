import { assertEquals } from 'asserts'
import app from '../src/app.ts'

Deno.test('[app] responds with a not found message', async () => {
  const req = await app.request('/what-is-this-even')

  assertEquals(req.status, 404)
  assertEquals(
    req.headers.get('content-type'),
    'application/json; charset=UTF-8',
  )
})

Deno.test('[GET /v1] responds with a json message', async () => {
  const req = await app.request('/v1')
  const res = await req.json()

  assertEquals(req.status, 200)
  assertEquals(
    req.headers.get('content-type'),
    'application/json; charset=UTF-8',
  )
  assertEquals(res, {
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  })
})
