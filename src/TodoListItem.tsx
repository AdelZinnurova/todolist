import {TodoListTitle} from "./TodoListTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {TaskList} from "./TaskList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";
import {FiltersValuesType} from "./App.tsx";

type TodoListItemPropsType = {
    title: string
    tasks: Array<TaskPropsType>
    filter: FiltersValuesType
    deleteTask: (taskId: string) => void
    changeTodolistFilter: (newFilterValue: FiltersValuesType) => void
    createTask: (title: string) => void
    changeTaskStatus: (taskId: string, newStatus: boolean) => void
}

export type TaskPropsType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoListItem = (props: TodoListItemPropsType) => {
    return (
        <div>
            <TodoListTitle title={props.title}/>
            <AddTaskForm createTask={props.createTask}/>
            <TaskList tasks={props.tasks} deleteTask={props.deleteTask} changeTaskStatus={props.changeTaskStatus}/>
            <FilterButtons filter={props.filter} changeTodolistFilter={props.changeTodolistFilter}/>
        </div>
    );
};