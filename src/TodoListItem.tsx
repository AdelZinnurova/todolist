import {TodoListTitle} from "./TodoListTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {TaskList} from "./TaskList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";
import {FiltersValuesType} from "./App.tsx";

type TodoListItemPropsType = {
    todolistId: string
    title: string
    tasks: Array<TaskPropsType>
    filter: FiltersValuesType
    deleteTask: (taskId: string, todolistId: string) => void
    changeTodolistFilter: (newFilterValue: FiltersValuesType, todolistId: string) => void
    createTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, newStatus: boolean, todolistId: string) => void
    deleteTodolist: (todolistId: string) => void
}

export type TaskPropsType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoListItem = (props: TodoListItemPropsType) => {
    return (
        <div>
            <TodoListTitle title={props.title} deleteTodolist={props.deleteTodolist} todolistId={props.todolistId}/>
            <AddTaskForm createTask={props.createTask} todolistId={props.todolistId}/>
            <TaskList tasks={props.tasks} deleteTask={props.deleteTask} changeTaskStatus={props.changeTaskStatus} todolistId={props.todolistId}/>
            <FilterButtons filter={props.filter} changeTodolistFilter={props.changeTodolistFilter} todolistId={props.todolistId}/>
        </div>
    );
};