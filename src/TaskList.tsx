import {TaskPropsType} from "./TodoListItem.tsx";
import {ChangeEvent} from "react";
import {EditableSpan} from "./EditableSpan.tsx";


type TaskListPropsType = {
    tasks: Array<TaskPropsType>
    todolistId: string
    deleteTask: (taskId: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, newStatus: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, title: string, todolistId: string) => void
    changeTodolistTitle: (title: string, todolistId: string) => void
}

export const TaskList = ({tasks, deleteTask, changeTaskStatus, todolistId, changeTaskTitle, changeTodolistTitle}: TaskListPropsType) => {

    const taskList = tasks.length === 0
        ? <span>Ваш список пуст</span>
        : <ul>
            {
                tasks.map(t => {
                    const deletetaskHandler = () => deleteTask(t.id, todolistId)
                    const changeTaskTitleHandler = (title: string) => {
                        changeTaskTitle(t.id, title, todolistId)
                    }
                    const changeTodolistTitleHandler = (title: string) => {
                        changeTodolistTitle(title, todolistId)
                    }
                    return (
                        <li key={t.id}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(t.id, e.currentTarget.checked, todolistId)}/>
                            {/*<span className={t.isDone ? 'task-done' : 'task'}>{t.title}</span>*/}
                            <EditableSpan title={t.title} changeTitle={changeTodolistTitleHandler}/>
                            <button className='btn-delete' onClick={deletetaskHandler}>x</button>
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