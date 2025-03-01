<template>
    <li>
      {{ task.title }}
      <button @click="onDelete(task.id)">Delete</button>
    </li>
  </template>
  
  <script>
  export default {
    props: ['task', 'onDelete'], // Принцип Interface Segregation: Компонент получает только необходимые данные через props.
  };
  </script>
  
  <style scoped>
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 8px 0;
  }
  button {
    margin-left: 16px;
    padding: 4px 8px;
    cursor: pointer;
  }
  </style>