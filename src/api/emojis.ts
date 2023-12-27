import { Hono } from 'hono'

const router = new Hono()

router.get('/', ({ json }) => json(['😀', '😳', '🙄']))

export default router
