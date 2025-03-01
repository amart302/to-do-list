<template>
    <h1>To-Do List</h1>
    <AddTaskForm :updateList="updateList" />
    <TaskList />
</template>

<script>
import AddTaskForm from './components/AddTaskForm.vue';
import TaskList from './components/TaskList.vue';
import taskServise from './services/taskServise';


export default {
  components: { TaskList, AddTaskForm },
  methods: {
    updateList() {
      // Принцип Open/Closed: Метод можно расширить для выполнения дополнительных действий после добавления задачи.
      window.location.reload();
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
}
h1 {
  text-align: center;
}
</style>