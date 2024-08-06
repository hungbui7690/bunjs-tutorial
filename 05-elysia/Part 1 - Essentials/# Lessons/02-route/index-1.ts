/*
  Route
  - Web servers use the request's path and HTTP method to look up the correct resource, refers as "routing".
  - We can define a route by calling a method named after HTTP verbs, passing a path and a function to execute when matched.


  👍 Rule of thumb, ALWAYS use method chaining in Elysia
    -> Elysia is using method chaining to synchronize type safety for later use.    
    -> Without method chaining, Elysia can't ensure your type integrity which will have of usage in later chapters

  
*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => 'hello')
  .get('/hi', () => 'hi')
  .post('/users', () => 'create users')
  .listen(5000)
