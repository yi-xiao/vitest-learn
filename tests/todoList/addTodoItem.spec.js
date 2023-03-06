import { createPinia } from "pinia";
import { describe, it, expect } from "vitest";
import { TodoStore } from '../../src/examples/todoList/hooks/useTodoItem'

describe('todoList test', () => {
    it('add todo item', ()=>{
        const todo = TodoStore.addTodoItem('ok')
        expect(TodoStore.todos[0].title).toBe('ok')
    })
})