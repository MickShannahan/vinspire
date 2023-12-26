<template>
  <div class="bg-acrylic rounded-pill text-light px-3 py-1 text-end selectable" data-bs-toggle="collapse" data-bs-target="#toDo-collapse">
    <div v-if="toDosLeft.length">
      To Dos remaining <b>{{ toDosLeft.length }}</b>
    </div>
    <div v-else>All Done</div>
  </div>
  <div id="toDo-collapse" class="bg-acrylic collapse px-3 py-2 text-light rounded container-fluid mt-2">

    <section class="row mb-1 align-items-baseline" v-for="todo in toDos">
      <div class="col-1"><input type="checkbox" @click="toggleTodo(todo)" :checked="todo.completed"></div>
      <div class="col">{{ todo.description }}</div>
      <div class="col-2">
        <button @click="deleteTodo(todo.id)" class="btn btn-outline-danger border-0" title="delete todo"><i class="mdi mdi-delete-forever"></i></button>
      </div>
    </section>


    <form @submit.prevent="createToDo" class="mt-2">
      <div class="input-group w-100">
        <input v-model="toDoData.description" placeholder="make vinspire" class="bg-transparent border rounded-start text-light form-control" type="text" id="todo description">
        <button class="btn btn-outline-light"><i class="mdi mdi-plus"></i></button>
      </div>
    </form>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { toDosService } from '../services/TodosService.js';
export default {
  setup(){
    onMounted(()=>{
      getToDos()
    })
    const toDoData = ref({})
    async function getToDos(){
      try {
        await toDosService.getToDos()
      } catch (error) {
        Pop.error(error)
      }
    }
  return {
    toDoData,
    toDos: computed(()=> AppState.toDos),
    toDosLeft: computed(()=> AppState.toDos.filter(t => !t.completed)),
    async createToDo(){
      try {
        await toDosService.createToDo(toDoData.value)
        toDoData.value ={}
      } catch (error) {
        Pop.error(error)
      }
    },
    async toggleTodo(todo){
      try {
        todo.completed = !todo.completed
        await toDosService.updateTodo(todo)
      } catch (error) {
        Pop.error(error)
      }
    },
    async deleteTodo(todoId){
      try {
        if(await Pop.confirm('Are you sure you want to delete this?')){
          await toDosService.deleteTodo(todoId)
        }
      } catch (error) {
        Pop.error(error)
      }
    }
   }
  }
};
</script>


<style lang="scss" scoped>

</style>
