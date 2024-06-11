// src/store/TodoStore.ts
import { makeAutoObservable } from "mobx";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export class TodoStore {
    todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    // Load todos from localStorage
    loadTodosFromLocalStorage() {
        if (typeof window !== 'undefined') {
            const storedTodos = localStorage.getItem('todos');
            if (storedTodos) {
                // Parse todos and assign directly to the observable
                this.todos = JSON.parse(storedTodos);
            }
        }
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    addTodo(text: string) {
        const todo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        this.todos.push(todo);
        this.saveTodos();
    }

    toggleTodo(id: number) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
        }
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
    }
}

const todoStore = new TodoStore();
todoStore.loadTodosFromLocalStorage(); // Load todos here
export default todoStore;

// Now, access todos directly
console.log("todoStore.todossacsc", todoStore.todos);
