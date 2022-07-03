const todosNode = document.querySelector('.js-todos');
let todos = [];

function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    };

    todos.push(todo);
}

function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true;
        }
    })
}

function render() {
    console.log(todos);
    let html = '';

    todos.forEach(todo => {
        if (todo.done) {
            return;
        };

        html += `
            <div></div>
        `;
    })

    todosNode.innerHTML = html;
}

addTodo('Купить хлеб');

render();