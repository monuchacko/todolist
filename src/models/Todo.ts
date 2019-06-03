/**
 * Model to todo tasks
 */
export default interface Todo {
  id: number,
  name: string,
  description: string,
  duedate: Date,
  done: boolean
}