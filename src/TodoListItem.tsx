import {TodoListTitle} from "./TodoListTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {TaskList} from "./TaskList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";
import {FiltersValuesType} from "./App.tsx";

type TodoListItemPropsType = {
    title: string
    tasks: Array<TaskPropsType>
    deleteTask: (taskId: number) => void
    changeTodolistFilter: (newFilterValue: FiltersValuesType) => void
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
            <TaskList tasks={props.tasks} deleteTask={props.deleteTask}/>
            <FilterButtons changeTodolistFilter={props.changeTodolistFilter}/>
        </div>
    );
};