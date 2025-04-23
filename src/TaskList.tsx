import {TaskPropsType} from "./TodoListItem.tsx";
import {ChangeEvent} from "react";


type TaskListPropsType = {
    tasks: Array<TaskPropsType>
    todolistId: string
    deleteTask: (taskId: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, newStatus: boolean, todolistId: string) => void
}

export const TaskList = ({tasks, deleteTask, changeTaskStatus, todolistId}: TaskListPropsType) => {

    const taskList = tasks.length === 0
        ? <span>Ваш список пуст</span>
        : <ul>
            {
                tasks.map(t => {
                    const deletetaskHandler = () => deleteTask(t.id, todolistId)
                    return (
                        <li key={t.id}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(t.id, e.currentTarget.checked, todolistId)}/>
                            <span className={t.isDone ? 'task-done' : 'task'}>{t.title}</span>
                            <button onClick={deletetaskHandler}>X</button>
                        </li>
                    )
                })
            }
        </ul>

    return (
        <>
            {taskList}
        </>
    );
};