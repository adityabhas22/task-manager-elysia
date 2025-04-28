import { TaskModel } from '../models/task.model'

type Task = typeof TaskModel.static

export class TaskService {
  private static tasks: Task[] = []
    private static count : number = 0
  static getAll(): Task[] {
    return this.tasks
  }

  static getById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id)
  }

  static add(task: Task): Task {
    this.tasks.push(task)
    return task
  }

  static update(id: string, update: Partial<Task>): Task | undefined {
    const task = this.getById(id)
    if (task) {
      Object.assign(task, update)
    }
    return task
  }

  static delete(id: string): boolean {
    const idx = this.tasks.findIndex(task => task.id === id)
    if (idx !== -1) {
      this.tasks.splice(idx, 1)
      return true
    }
    return false
  }
} 