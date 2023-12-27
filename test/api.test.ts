import { assertEquals } from 'asserts'
import app from '../src/app.ts'

Deno.test('[GET /v1/api] responds with a json message', async () => {
  const request = await app.request('/v1/api')
  const response = await request.json()

  assertEquals(request.status, 200)
  assertEquals(
    request.headers.get('content-type'),
    'application/json; charset=UTF-8',
  )
  assertEquals(response, {
    message: 'API - 👋🌎🌍🌏',
  })
})

Deno.test('[GET /v1/api/emojis] responds with a json message', async () => {
  const request = await app.request('/v1/api/emojis')
  const response = await request.json()

  assertEquals(request.status, 200)
  assertEquals(
    request.headers.get('content-type'),
    'application/json; charset=UTF-8',
  )
  assertEquals(response, ['😀', '😳', '🙄'])
})
