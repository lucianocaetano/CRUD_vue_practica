<template>
  <div class="container">
    <h1 class="text-center">pagina tasks</h1>

    <div v-if="!isLoading" class="mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task._id">
            <th scope="row">{{task.id}}</th>
            <td>{{task.name}}</td>
            <td>{{task.description}}</td>
            <td>{{task.status}}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    <div v-else class="text-center">loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { ITasks } from "../interfaces/tasks.interface"

export default defineComponent({
  setup() {
    const url: string = `${import.meta.env.VITE_APP_API_BASE}/api/task`
   
    const tasks: Ref<Array<ITasks> | null> = ref(null)
    const isLoading: Ref<boolean> = ref(true) 

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        tasks.value = response
        isLoading.value = false

        return response
      })

    return {isLoading, tasks}

  },
})
</script>

