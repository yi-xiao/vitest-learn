import { defineStore } from "pinia";

export const TodoStore = defineStore('todo', () => {
    const todos = []

    function addTodoItem(title) {
        const todo = {
            title,
        }

        todos.push(todo)
    }

    return {
        todos,
        addTodoItem,
    }
})