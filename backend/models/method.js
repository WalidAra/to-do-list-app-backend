const Methods = {
  DeleteTask: (tasks, id) => {
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    return tasks;
  },

  AddNewTask: (tasks, task) => {
    if (task !== "") {
      const newTask = {
        id: (Number(tasks[tasks.length - 1].id) + 1).toString(),
        content: task,
      };
      tasks.push(newTask);
    }
    return tasks;
  },
};

module.exports = Methods;
