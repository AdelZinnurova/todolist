import {TaskPropsType} from "./TodoListItem.tsx";


type TaskListPropsType = {
    tasks: Array<TaskPropsType>,
    deleteTask: (taskId: number) => void
}

export const TaskList = ({tasks, deleteTask}: TaskListPropsType) => {

    const taskList = tasks.length === 0
        ? <span>Ваш список пуст</span>
        : <ul>
            {
                tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                            <button onClick={() => deleteTask(t.id)}>X</button>
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