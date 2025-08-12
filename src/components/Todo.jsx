import { Input } from "./forms/Input";

export function Todo(){


    return <>
        <li className="todo list-group-item d-flex align-items-center">
            <input className="form-check-input" type="checkbox" id="todo-1" />
            <label className="ms-2 form-check-label" htmlFor="todo-1">
                Tâche à faire 2
            </label>
            <label className="ms-auto btn btn-danger btn-sm" >
                <i className="bi-trash"></i>
            </label>
        </li>
    </>
}