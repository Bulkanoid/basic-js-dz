const ToDOList = {
  lastId: 0,

  getNextId() {
    if (!this.lastId) {
      this.lastId = 0;
    }
    return this.lastId++;
  },

  _findTask(id) {
    return this.tasks.find((el) => el.id === id);
  },

  isValidData(data) {
    if (!data) {
      console.log('Не передана задача');
      return false;
    }

    if (typeof data !== 'object') {
      console.log('Неверный формат данных');
      return false;
    }

    return true;
  },

  addTask(data) {
    if (!this.tasks) {
      this.tasks = [];
    }

    if (!this.isValidData(data)) {
      return this;
    }

    if (!data.title && !data.name) {
      console.log('Задача должна содержать название');
      return this;
    }

    this.tasks.push({ ...data, id: this.getNextId() });

    return this;
  },

  deleteTask(id) {
    if (!this._findTask(id)) {
      console.log(`Ваш план провалился, задача с id = ${id} не найдена`);
      return this;
    }

    this.tasks = this.tasks.filter((el) => el.id != id);
    return this;
  },

  updateNameOrPriority(updateData) {
    const { id, ...data } = updateData;
    const task = this._findTask(id);

    if (!task || !this.isValidData(data)) {
      console.log(`Для обновления задачи укажите существующий id`);
      return this;
    }

    Object.assign(task, { ...data });

    return this;
  },

  sortTasks(order = 'asc') {
    function sortPattern(a, b) {
      const sortablePropertyA = a.order ? 'order' : 'priority';
      const sortablePropertyB = b.order ? 'order' : 'priority';
      switch (order) {
        case 'asc':
          return a[sortablePropertyA] - b[sortablePropertyB];
        case 'desc':
          return b[sortablePropertyB] - a[sortablePropertyA];
      }
    }

    const sortedTasks = [...this?.tasks].sort(sortPattern);

    return sortedTasks;
  },
};

ToDOList.addTask({ title: 'Омг' })
  .addTask({ name: 'dsf', order: 20 })
  .addTask({ title: 'fdsfsd', priority: 5 })
  .updateNameOrPriority({ id: 2, title: 'Вау', priority: 15 })
  .updateNameOrPriority({ id: 2, priority: 18 });

console.log(ToDOList.sortTasks());
console.log(ToDOList.tasks);

//////////////////////////
const newTask = {};

function bindMethods(target, source) {
  target.tasks = target.tasks || [];
  target.lastId = target.lastId || 0;
  const methods = Object.keys(source).map(
    (method) =>
      method !== 'tasks' && method !== 'lastId' && (target[method] = source[method].bind(target)),
  );

  // const methods = Object.keys(source);
  // for (let method of methods) {
  //   if (method !== 'tasks' && method !== 'lastId') {
  //     target[method] = source[method].bind(target);
  //   }
  // }
}

bindMethods(newTask, ToDOList);

newTask
  .addTask({
    name: 'test2',
    description: 'description2',
    order: 10,
  })
  .addTask({
    name: 'test3',
    description: 'description3',
    order: 20,
  });
console.log(newTask.sortTasks('desc'));
console.log(newTask.tasks);
