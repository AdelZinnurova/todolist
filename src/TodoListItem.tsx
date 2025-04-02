import {TodoListTitle} from "./TodoListTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {TaskList} from "./TaskList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";

type TodoListItemPropsType = {
    title: string
    tasks: Array<TaskPropsType>
}

export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoListItem = (props: TodoListItemPropsType) => {
    return (
        <div>
            <TodoListTitle title={props.title}/>
            <AddTaskForm/>
            <TaskList tasks={props.tasks} />
            <FilterButtons/>
        </div>
    );
};