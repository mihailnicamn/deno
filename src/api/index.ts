import { Hono } from 'hono'
import emojis from './emojis.ts'

const router = new Hono()

router.get('/', ({ json }) =>
  json({
    message: 'API - 👋🌎🌍🌏',
  }))

router.route('/emojis', emojis)

export default router
