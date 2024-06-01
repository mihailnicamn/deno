import { d, Dongoose } from 'https://deno.land/x/dongoose@1.0.2/mod.ts'

export const useUsers = (db: Deno.Kv) =>
  Dongoose(
    {
      email: d.string().email(),

      username: d.string(),
      password: d.string().min(8).max(32),

      firstname: d.string().optional(),
      lastname: d.string().optional(),
    },
    {
      db, // Your Deno KV intance
      name: 'users', // Your collection name
      indexes: ['email', 'username'],
    },
  )
