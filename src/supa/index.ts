import { d, Dongoose } from 'https://deno.land/x/dongoose/mod.ts'
import { useUsers } from './schemas/user.ts'

Deno.cron('Sample cron', '*/1 * * * *', async () => {
  console.log('Every minute, Deno Deploy runs this without a server')
})
export const TestKV = async () => {
  const db = await Deno.openKv()
  const users = useUsers(db);
  const item = await users.create({
    email: 'wugro@jo.st',
    username: 'Emmet',
    password: 'Homenick',
  })

  console.log({
    item,
  })
  const user = await users.findOne({ email: 'wugro@jo.st' })
  console.log(user)
  const _sameUserWithId = await users.findById(user!.id)

  await users.updateById(user!.id, { firstname: 'John' })
  return user
  //   await users.deleteById(user!.id)
}
