const ToDOList = {
  tasks: [
    {
      id: 1,
      title: 'Помыть посуду',
      priority: 1,
    },
  ],

  // Ищем задачу по id
  _findTask: function (id) {
    return this.tasks.find((el) => el.id == id);
  },

  addTask: function (task) {
    // Обновляю таски если передана задача с id и выхожу из функции, если id не совпали ну чтож(
    if (task.id) {
      this.tasks = this.tasks.map((el) => {
        if (el.id === task.id) {
          return { id: task.id, title: task.title, priority: task.priority };
        }
        return el;
      });
      return;
    }

    // Создаю id для новой задачи
    const id =
      this.tasks.reduce((acc, cur) => {
        if (cur.id > acc) {
          return (acc = cur.id);
        }
        return acc;
      }, 0) + 1;

    // Если не указан приоритет ставлю по умолчанию 1
    const priority = task.priority ?? 1;

    // Добавляю новую задачу
    this.tasks.push({
      ...task,
      id,
      priority,
    });

    console.log('Новая задача успешно создана');
  },

  deleteTask: function (id) {
    // Провожу проверку на предмет наличия задачи, если не найдена то сообщаем об этом и выходим
    if (!this._findTask(id)) {
      console.log(`Ваш план провалился, задача с id = ${id} не найдена`);
      return;
    }

    this.tasks = this.tasks.filter((el) => el.id != id);
    console.log(`В результате ваших действий нам пришлось удалить задачу`);
  },

  // updateNameOrPriority: function ({ ...args }) {
  //   const { id, title, priority } = args;
  //   const task = this._findTask(id);

  //   //Выполняю проверки на предмент наличия задачи, и переданных в функцию аргументов
  //   if (!task) {
  //     console.log(`Для обновления задачи укажите существующий id`);
  //     return;
  //   }
  //   if (!title && !priority) {
  //     console.log('На что вы вообще расчитывали?');
  //     return;
  //   }

  //   // Получаю аргументы новой задачи
  //   const keysProps = Object.keys(args);

  //   // Ну что бы обойтись без ифов и свичей, разворачиваю новую задачу в об.ект, дальше беру ключ и добавляю значение
  //   for (let i of keysProps) {
  //     task = { ...task, [i]: args[i] };
  //   }
  //   this.addTask(task);
  // },

  // Попытка упростить функцию
  updateNameOrPriority2: function ({ id, title, priority }) {
    const task = this._findTask(id);

    if (!task) {
      console.log(`Для обновления задачи укажите существующий id`);
      return;
    }

    // Проверочки и обновление
    if (title !== undefined) task.title = title;
    if (priority !== undefined) task.priority = priority;

    console.log('Задача обновлена');
  },

  sortTasks: function (order = 'asc') {
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
ToDOList.deleteTask(1);
ToDOList.updateNameOrPriority2({ id: 2, title: 'Вау', priority: 15 });
ToDOList.updateNameOrPriority2({ id: 2, priority: 18 });
ToDOList.updateNameOrPriority2({ id: 2 });
console.log(ToDOList.sortTasks('asc'));
console.log(ToDOList.sortTasks('desc'));
console.log(ToDOList.sortTasks('dfsfds'));
