import { t } from 'elysia'

export const TaskModel = t.Object({
  id: t.String(),
  title: t.String(),
  completed: t.Boolean()
}) //Used for validation