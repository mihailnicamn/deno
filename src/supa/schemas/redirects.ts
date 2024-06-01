import { d, Dongoose } from 'https://deno.land/x/dongoose@1.0.2/mod.ts'

export const useTgLeads = (db: Deno.Kv) =>
  Dongoose(
    {
      username: d.string().min(3),
      firstName: d.string().min(3),
      lastName: d.string().min(3),
      fullName: d.string().min(3),
      createdAt: d.date().optional(),
      updatedAt: d.date().optional(),
    },
    {
      db, // Your Deno KV intance
      name: 'tg-leads', // Your collection name
      indexes: ['username'],
    },
  )
