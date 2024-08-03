/*
  Elysia - Route & Handler
  - we get this 
    .post('/post/:id', (body) => {
    
  - actually, the param is: context
    .post('/post/:id', (context) => {

  - from the context, we can extract params
    .post('/post/:id', ({params}) => {

  - from the params, we can extract id 
    .post('/post/:id', ({params: {id}}) => {



*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => 'Hello Elysia')

  // (1) params
  .get('/post/:id', ({ params: { id } }) => {
    return { id, title: 'Say Hi to Bun' }
  })

  // (2) test with postman
  .get('/post/:id', (body) => {
    return body
  })

  // (4)
  .get('/post/:id', ({ body }) => {
    return { body }
  })

  // (3)
  .get('/tracking/*', () => {
    return 'Tracking Route'
  })
  .all('*', () => {
    return '404'
  })
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
