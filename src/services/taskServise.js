// Принцип Single Responsibility: Этот класс отвечает только за управление данными задач.
class TaskService {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      this.saveTasks();
    }
  
    removeTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      this.saveTasks();
    }
  
    getTasks() {
      return this.tasks;
    }
  
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  
  // Принцип Dependency Inversion: Мы используем singleton-объект, чтобы другие компоненты зависели от абстракции (интерфейса сервиса), а не от конкретной реализации.
  export default new TaskService();