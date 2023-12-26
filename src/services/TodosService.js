import {api} from './AxiosService.js'
import {AppState} from '../AppState.js'
import {ToDo} from '../models/Todo.js'


class ToDosService{

  async getToDos(){
    const res = await api.get('api/todos')
    let toDos = res.data.map(todo => new ToDo(todo))
    AppState.toDos = toDos
  }

  async createToDo(todoData){
    const res = await api.post('api/todos', todoData)
    let newToDo = new ToDo(res.data)
    AppState.toDos.push(newToDo)
  }

  async updateTodo(todo){
    const res = await api.put(`api/todos/${todo.id}`, todo)
    //Note data was already changed in component so don't need anything else
  }

  async deleteTodo(todoId){
    const res = await api.delete(`api/todos/${todoId}`)
    let indexToRemove = AppState.toDos.findIndex(t => t.id == todoId)
    AppState.toDos.splice(indexToRemove, 1)
  }

}

export const toDosService = new ToDosService()
