import { useState, useEffect } from "react";
import { Input } from "../components/forms/Input";
import { useQuery } from "@tanstack/react-query";
import { TodoGroup } from "../components/TodoGroup";
import { useToggle } from "../hooks/useToggle";

export function TodoPage() {
    const [todoText, setTodoText] = useState("");
    const [filter, setFilter] = useState("all");
    const [todos, setTodos] = useState([]);

    const { isLoading, data = [], error, refetch } = useQuery({
        queryKey: ['todos'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(data => data.slice(0, 5)),
    });

    // Remplit les todos seulement au premier chargement
    useEffect(() => {
        if (todos.length === 0 && data.length > 0) {
            setTodos(data);
        }
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = todoText.trim();
        if (title === '') return;
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        };
        setTodos(prev => [...prev, newTodo]);
        setTodoText("");
    };

    // Filtrage sur todos (pas data)
    const visibleTodos = todos.filter(todo => {
        if (filter === "all") return true;
        if (filter === "todo") return !todo.completed;
        if (filter === "done") return todo.completed;
        return true;
    });

    return (
        <div className="container">
            <section className="container pt-5" id="todolist">
                <form className="d-flex pb-4" onSubmit={handleSubmit}>
                    <Input
                        className="form-control"
                        name="todo-input"
                        placeholder="Acheter des patates..."
                        id="todo-input"
                        value={todoText}
                        onChange={setTodoText}
                    />
                    <button className="btn btn-primary">Ajouter</button>
                </form>
                <main>
                    <div className="btn-group mb-4" role="group">
                        <button type="button" className={`btn btn-outline-primary${filter === "all" ? " active" : ""}`} onClick={() => setFilter("all")}>Toutes</button>
                        <button type="button" className={`btn btn-outline-primary${filter === "todo" ? " active" : ""}`} onClick={() => setFilter("todo")}>A faire</button>
                        <button type="button" className={`btn btn-outline-primary${filter === "done" ? " active" : ""}`} onClick={() => setFilter("done")}>Faites</button>
                        {isLoading &&
                            <div className="spinner-border ms-3" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }
                    </div>
                    {error &&
                        <div className="alert alert-dark" role="alert">
                            Impossible de charger les tâches
                        </div>
                    }
                    <TodoGroup todos={visibleTodos} />
                </main>
            </section>
        </div>
    );
}