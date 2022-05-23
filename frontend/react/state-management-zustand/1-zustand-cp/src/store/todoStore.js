import create from 'zustand';

const useTodoStore = create((set) => ({
    todos: [],
    doneTodos: [],
    undoneTodos: [],
    count: 0,
    doneCount: 0,
    addTodo: (todo) => {
        set((state) => {
            const newTodo = {
                id: Date.now(),
                text: todo,
                isDone: false,
            };
            return {
                todos: [...state.todos, newTodo],
                doneTodos: state.doneTodos,
                undoneTodos: state.undoneTodos,
                count: state.count + 1,
                doneCount: state.doneCount,
            };
        });
    },
    toggleTodo: (id) => {
        set((state) => {
            const todo = state.todos.find((todo) => todo.id === id);
            const newTodos = state.todos.filter((todo) => todo.id !== id);
            const newDoneTodos = state.doneTodos.filter((todo) => todo.id !== id);
            const newUndoneTodos = state.undoneTodos.filter((todo) => todo.id !== id);
            if (todo.isDone) {
                return {
                    todos: newTodos,
                    doneTodos: [...state.doneTodos, todo],
                    undoneTodos: newUndoneTodos,
                    count: state.count - 1,
                    doneCount: state.doneCount - 1,
                };
            }
            else {
                return {
                    todos: newTodos,
                    doneTodos: newDoneTodos,
                    undoneTodos: [...state.undoneTodos, todo],
                    count: state.count + 1,
                    doneCount: state.doneCount + 1,
                };
            }
        });
    },
    removeTodo: (id) => {
        set((state) => {
            const newTodos = state.todos.filter((todo) => todo.id !== id);
            const newDoneTodos = state.doneTodos.filter((todo) => todo.id !== id);
            const newUndoneTodos = state.undoneTodos.filter((todo) => todo.id !== id);
            return {
                todos: newTodos,
                doneTodos: newDoneTodos,
                undoneTodos: newUndoneTodos,
                count: state.count - 1,
                doneCount: state.doneCount - 1,
            };
        });
    },
}));

export default useTodoStore;