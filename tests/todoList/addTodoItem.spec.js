import { createPinia, setActivePinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { TodoStore } from '../../src/examples/todoList/hooks/useTodoItem'

describe('todoList test', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('test add todo item', () => {
        const store = TodoStore()
        const todo = store.addTodoItem('ok')
        expect(store.todos[0]).toEqual(todo)
    })

    it('test reverse command', () => {
        const store = TodoStore()
        store.addTodoItem('reverse:ok')
        expect(store.todos[0].title).toBe('ko')

        // TODO 边界处理
        // store.addTodoItem('reverse :ok')
        // expect(store.todos[1].title).toBe('ko')
    })

    it('test top command', () => {
        const store = TodoStore()
        store.addTodoItem('ok')
        const todo = store.addTodoItem('top:love')
       
        expect(store.todos[0].title).toBe('love')

        // store.addTodoItem('top :love')
        // expect(store.todos[0].title).toBe('love')
    })

    it('test remove todo item', () => {
        const store = TodoStore()
        store.addTodoItem('ok')
        const todo = store.addTodoItem('top:love')

        store.removeTodoItem(todo.id)
       
        expect(store.todos.length).toBe(1)
    })

})