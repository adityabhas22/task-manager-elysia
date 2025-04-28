import { Elysia } from 'elysia'
import { TaskService } from '../services/task.service'
import { TaskModel } from '../models/task.model'
import { t } from 'elysia'

// Define an explicit partial task schema
const PartialTaskModel = t.Object({
  id: t.Optional(t.String()),
  title: t.Optional(t.String()),
  completed: t.Optional(t.Boolean())
})

export const TaskController = new Elysia({ prefix: '/tasks' })
  .get('/', () => TaskService.getAll())
  .get('/:id', ({ params }) => TaskService.getById(params.id))
  .post('/', ({ body }) => TaskService.add(body), { body: TaskModel })
  .put('/:id', ({ params, body }) => TaskService.update(params.id, body as Partial<typeof TaskModel.static>), { body: PartialTaskModel })
  .delete('/:id', ({ params }) => TaskService.delete(params.id)) 