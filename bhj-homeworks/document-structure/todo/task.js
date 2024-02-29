document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task__input');
    const taskForm = document.getElementById('tasks__form');
    const taskList = document.getElementById('tasks__list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskTitle = taskInput.value.trim();
        if (taskTitle !== '') {
            addTask(taskTitle);
            taskInput.value = '';
        }
    });

    function addTask(title) {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = title;

        const removeButton = document.createElement('a');
        removeButton.classList.add('task__remove');
        removeButton.innerHTML = '&times;';

        task.appendChild(taskTitle);
        task.appendChild(removeButton);
        taskList.appendChild(task);

        removeButton.addEventListener('click', function() {
            taskList.removeChild(task);
        });
    }
});
