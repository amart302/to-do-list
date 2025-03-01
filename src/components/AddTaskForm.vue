<template>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="newTaskTitle"
        placeholder="Enter a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  </template>
  
  <script>
import taskServise from '../services/taskServise';


  
  export default {
    data() {
      return {
        newTaskTitle: '',
      };
    },
    props: ["updateList"],
    methods: {
      handleSubmit() {
        if (this.newTaskTitle.trim()) {
          const newTask = {
            id: Date.now(),
            title: this.newTaskTitle,
          };
          taskServise.addTask(newTask);
          this.newTaskTitle = '';
          this.updateList();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }
  input {
    flex: 1;
    padding: 8px;
  }
  button {
    padding: 8px 16px;
    cursor: pointer;
  }
  </style>