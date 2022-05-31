import create from 'zustand';

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (todo) => { set(state => ({ todos: [...state.todos, todo] })); },
    removeTodo: (selected) => 
    set((state) => ({
        todos: state.todos.filter(todo => todo.id !== selected)
    })),
    toggleTodo: (selected) =>
    set((state) => ({
        todos: state.todos.map(todo => todo.id === selected ? { ...todo, isDone: !todo.isDone } : todo)
    })),
}));

export default useTodoStore;