import { defineStore } from "pinia";
import {ref} from 'vue'

export const TodoStore = defineStore('todo', () => {
    const todos = ref([])
    let id = 1

    const REVERSECOMMAND = 'reverse'
    const TOPCOMMAND = 'top'

    function addTodoItem(title) {

        let isTop = false
        if (title.startsWith(`${REVERSECOMMAND}:`)) {
            title = title.slice(REVERSECOMMAND.length + 1).split('').reverse().join('')
        }

        if (title.startsWith(`${TOPCOMMAND}:`)) {
            isTop = true
            title = title.slice(TOPCOMMAND.length + 1)
        }

        const todo = {
            title,
            id: id++,
        }

        isTop ? todos.value.unshift(todo) : todos.value.push(todo)

        return todo
    }

    function removeTodoItem(todoId) {
        todos.value = todos.value.filter(todo => todo.id != todoId)
    }

    return {
        todos,
        addTodoItem,
        removeTodoItem,
    }
})