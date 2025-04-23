import './App.css'
import {TaskPropsType, TodoListItem} from "./TodoListItem.tsx";
import {useState} from "react";
import {v1} from "uuid";

export type FiltersValuesType = 'all' | 'active' | 'completed'
export type Todolist = {
    id: string
    title: string
    filter: FiltersValuesType
}
export type TasksState = {
    [todolistId: string]: TaskPropsType[]
}

function App() {

    const todolistId_1 = v1()
    const todolistId_2 = v1()

    const [todolists, setTodolists] = useState<Todolist[]>(
        [
            {id: todolistId_1, title: 'What to learn', filter: 'all'},
            {id: todolistId_2, title: 'What to buy', filter: 'all'},
        ])

    const [tasks, setTasks] = useState<TasksState>({
        [todolistId_1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
        ],
        [todolistId_2]: [
            {id: v1(), title: 'Beer', isDone: true},
            {id: v1(), title: 'Cheeps', isDone: true},
            {id: v1(), title: 'Coca-cola', isDone: false},
        ],
    })

    const deleteTask = (taskId: string, todolistId: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)
        })
    }

    const createTask = (title: string, todolistId: string) => {
        const newTask: TaskPropsType = {id: v1(), title: title, isDone: false}
        setTasks({
            ...tasks,
            [todolistId]: [...tasks[todolistId], newTask]
        })
    }

    const changeTaskStatus = (taskId: string, newStatus: boolean, todolistId: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
        })
    }

    const changeTodolistFilter = (filter: FiltersValuesType, todolistId: string) => {
        setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, filter: filter} : tl))
    }

    const deleteTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(tl => tl.id !== todolistId))
    }

// UI (view)

    const todolistComponents = todolists.map(tl => {
        let filteredTasks = tasks[tl.id]
        if (tl.filter === 'active') {
            filteredTasks = filteredTasks.filter(t => t.isDone === false)}

        if (tl.filter === 'completed') {
            filteredTasks = filteredTasks.filter(t => t.isDone === true)
        }


        return (
            <TodoListItem
                key={tl.id}
                todolistId={tl.id}
                title={tl.title}
                filter={tl.filter}
                tasks={filteredTasks}
                deleteTask={deleteTask}
                changeTodolistFilter={changeTodolistFilter}
                createTask={createTask}
                changeTaskStatus={changeTaskStatus}
                deleteTodolist={deleteTodolist}
            />
        )
    })



    return (
        <div className="app">
            {todolistComponents}
        </div>
    )
}

export default App
