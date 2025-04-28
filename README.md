# Elysia + Bun Task Manager

A basic task manager app built with [Elysia](https://elysiajs.com/) on [Bun](https://bun.sh/), following best practices for structure and type safety.

## Architecture

```
/src
  /controllers
    task.controller.ts
  /models
    task.model.ts
  /services
    task.service.ts
  app.ts
  index.ts
```

- **models/**: Data validation and schema definitions using Elysia's `t.Object`.
- **services/**: Business logic and data operations (in-memory for demo).
- **controllers/**: Elysia instances for each resource (here, tasks), defining routes.
- **app.ts**: Composes controllers and plugins.
- **index.ts**: App entry point.

## How to Run

1. Install dependencies (if any):
   ```sh
   bun install
   ```
2. Start the server:
   ```sh
   bun run src/index.ts
   ```
3. The app will be running at [http://localhost:3000](http://localhost:3000)

## Endpoints

- `GET    /tasks`         - List all tasks
- `GET    /tasks/:id`     - Get a task by ID
- `POST   /tasks`         - Create a new task
- `PUT    /tasks/:id`     - Update a task
- `DELETE /tasks/:id`     - Delete a task

## References
- [Elysia Best Practices](https://elysiajs.com/essential/best-practice)
- [Bun Documentation](https://bun.sh/docs)
