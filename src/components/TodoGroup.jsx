import { useState, useEffect } from "react";
import { Checkbox } from "./forms/Checkbox";
import { AnimatePresence, motion } from "motion/react";

export function TodoGroup({ todos }) {
    const [checkedTodos, setCheckedTodos] = useState({});
    const [localTodos, setLocalTodos] = useState(todos);

    // Synchronise localTodos si la prop todos change
    useEffect(() => {
        setLocalTodos(todos);
        const initialChecked = {};
        todos.forEach(todo => {
            initialChecked[todo.id] = !!todo.completed;
        });
        setCheckedTodos(initialChecked);
    }, [todos]);

    const handleToggle = (id, checked) => {
        setCheckedTodos(prev => ({
            ...prev,
            [id]: checked
        }));
    };

    const handleDelete = (id) => {
        setLocalTodos(prev => prev.filter(todo => todo.id !== id));
        setCheckedTodos(prev => {
            const copy = { ...prev };
            delete copy[id];
            return copy;
        });
    };

    return (
        <ul className="list-group">
            <AnimatePresence>
                {localTodos.map(todo => (
                    <motion.li
                        key={todo.id}
                        className="todo list-group-item d-flex align-items-center"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        layout
                        id={todo.id}
                    >
                        <Checkbox
                            label={todo.title}
                            id={`todo-${todo.id}`}
                            checked={!!checkedTodos[todo.id]}
                            onChange={checked => handleToggle(todo.id, checked)}
                        />
                        <label className="ms-auto btn btn-danger btn-sm" onClick={() => handleDelete(todo.id)}>
                            <i className="bi-trash"></i>
                        </label>
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    );
}