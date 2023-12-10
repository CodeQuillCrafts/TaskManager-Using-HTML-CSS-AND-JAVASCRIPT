document.addEventListener('DOMContentLoaded', function () {
    let setterBtn = document.getElementsByClassName('setterBtn')[0];
    let setterInput = document.getElementsByClassName('setterInput')[0];
    let getter = document.getElementsByClassName('getter')[0];

    loadTasks();
    setterBtn.addEventListener('click', addTask);

    function addTask() {
        if (setterInput.value == '') {
            console.log("Empty");
        } else {
            let newItem = document.createElement('div');
            newItem.classList.add('setter');
            let newItemInput = document.createElement('p');
            newItemInput.textContent = setterInput.value;
            let icons = document.createElement('div');
            icons.classList.add("icons");
            let iFst = document.createElement('i');
            iFst.classList.add('fa');
            iFst.classList.add('fa-pencil');
            iFst.addEventListener('click', function () {
                makeEditable(newItemInput, iFst);
            });
            let iScnd = document.createElement('i');
            iScnd.classList.add('fa');
            iScnd.classList.add('fa-trash');
            iScnd.addEventListener('click', function () {
                deleteTask(newItem);
            });

            icons.appendChild(iFst);
            icons.appendChild(iScnd);
            newItem.appendChild(newItemInput);
            newItem.appendChild(icons);
            getter.appendChild(newItem);

            saveTask(setterInput.value);
        }
    }

    function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function (task) {
            createTaskElement(task);
        });
    }

    function createTaskElement(task) {
        let newItem = document.createElement('div');
        newItem.classList.add('setter');
        let newItemInput = document.createElement('p');
        newItemInput.textContent = task;
        let icons = document.createElement('div');
        icons.classList.add("icons");
        let iFst = document.createElement('i');
        iFst.classList.add('fa');
        iFst.classList.add('fa-pencil');
        iFst.addEventListener('click', function () {
            makeEditable(newItemInput, iFst);
        });
        let iScnd = document.createElement('i');
        iScnd.classList.add('fa');
        iScnd.classList.add('fa-trash');
        iScnd.addEventListener('click', function () {
            deleteTask(newItem);
        });

        icons.appendChild(iFst);
        icons.appendChild(iScnd);
        newItem.appendChild(newItemInput);
        newItem.appendChild(icons);
        getter.appendChild(newItem);
    }

    function makeEditable(element, editIcon) {
        element.contentEditable = true;
        element.focus();

        editIcon.classList.remove('fa-pencil');
        editIcon.classList.add('fa-check');

        editIcon.addEventListener('click', function () {
            saveUpdatedTask(element.textContent);
            element.contentEditable = false;
            editIcon.classList.remove('fa-check');
            editIcon.classList.add('fa-pencil');
        });
    }

    function saveUpdatedTask(updatedTask) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let index = Array.from(getter.children).indexOf(document.activeElement.closest('.setter'));
        tasks[index] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function deleteTask(taskElement) {
        let index = Array.from(getter.children).indexOf(taskElement);
        taskElement.remove();

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});