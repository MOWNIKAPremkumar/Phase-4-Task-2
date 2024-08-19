document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");


    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    const renderTodos = () => {
        todoList.innerHTML = "";
        savedTodos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.textContent = todo;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                savedTodos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(savedTodos));
                renderTodos();
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    };

    
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTodo = todoInput.value.trim();
        if (newTodo) {
            savedTodos.push(newTodo);
            localStorage.setItem("todos", JSON.stringify(savedTodos));
            renderTodos();
            todoInput.value = "";
        }
    });

    renderTodos();
});
