import { Elysia } from 'elysia'
import { TaskController } from './controllers/task.controller'
import { swagger } from '@elysiajs/swagger'
export const app = new Elysia()
  .use(TaskController) 
  .use(swagger({
    provider: 'swagger-ui',
    documentation: {
      info: {
        title: 'Task API',
        version: '1.0.0',
        description: 'A simple API for managing tasks'
      }
    }
  }))

