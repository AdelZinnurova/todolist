import {TaskPropsType} from "./TodoListItem.tsx";


type TaskListPropsType = {
    tasks: Array<TaskPropsType>,
}

export const TaskList = ({tasks}: TaskListPropsType) => {

    const taskList = tasks.length === 0
        ? <span>Ваш список пуст</span>
        : <ul>
            {
                tasks.map(t => {
                    return (
                        <li>
                            <input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
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