<template>
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete="handleDelete"
      />
    </ul>
  </template>
  
  <script>
  import taskServise from '../services/taskServise';
import TaskItem from './TaskItem.vue';
  
  export default {
    components: { TaskItem },
    data() {
      return {
        tasks: taskServise.getTasks(),
      };
    },
    methods: {
      handleDelete(id) {
        taskServise.removeTask(id);
        this.tasks = taskServise.getTasks();
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    padding: 0;
  }
  </style>