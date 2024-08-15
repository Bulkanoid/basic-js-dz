const ToDOList = {
  // счетчик id, а также метод получения следующего id
  // _lastId: 0,

  getNextId() {
    if (!this._lastId) {
      this._lastId = 0;
    }
    return this._lastId++;
  },

  // Ищем задачу по id
  _findTask(id) {
    return this.tasks.find((el) => el.id === id);
  },

  addTask(task) {
    // Проверяю на наличие свойства tasks, атрибута title, добавил счетчик id
    // А так-же сохраняю в новый объект не модифицируя входящий, добавил вовзрат this
    if (!this.tasks) {
      this.tasks = [];
    }

    if (!task.title) {
      console.log('Задача должна содержать название');
      return;
    }

    const id = this.getNextId();

    const newTask = {
      id,
      title: task.title,
      priority: task.priority ?? 1,
    };

    this.tasks.push(newTask);

    return this;
  },

  deleteTask(id) {
    // Провожу проверку на предмет наличия задачи, если не найдена то сообщаем об этом и выходим
    if (!this._findTask(id)) {
      console.log(`Ваш план провалился, задача с id = ${id} не найдена`);
      return;
    }

    this.tasks = this.tasks.filter((el) => el.id != id);
    return this;
  },

  // Попытка упростить функцию
  updateNameOrPriority({ id, title, priority }) {
    const task = this._findTask(id);

    if (!task) {
      console.log(`Для обновления задачи укажите существующий id`);
      return;
    }

    // Проверочки и обновление
    if (title !== undefined) task.title = title;
    if (priority !== undefined) task.priority = priority;

    return this;
  },

  sortTasks(order = 'asc') {
    const sortedTasks = [...this.tasks];
    sortedTasks.sort((a, b) =>
      order === 'desc' ? b.priority - a.priority : a.priority - b.priority,
    );
    return sortedTasks;
  },
};

ToDOList.addTask({ title: 'Омг' });
ToDOList.addTask({ title: 'dsf' });
ToDOList.addTask({ title: 'fdsfsd', priority: 5 });
ToDOList.updateNameOrPriority({ id: 2, title: 'Вау', priority: 15 });
ToDOList.updateNameOrPriority({ id: 2, priority: 18 });
ToDOList.updateNameOrPriority({ id: 2 });
console.log(ToDOList.sortTasks('asc'));
console.log(ToDOList.sortTasks('desc'));
console.log(ToDOList.sortTasks('dfsfds'));
