import './App.css'
import {TaskPropsType, TodoListItem} from "./TodoListItem.tsx";
import {useState} from "react";
import {v1} from "uuid";

export type FiltersValuesType = 'all' | 'active' | 'completed'

function App() {

    const todoListTitle_1 = 'What to learn'
    const [tasks, setTasks] = useState<Array<TaskPropsType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Typescript', isDone: false},
        {id: v1(), title: 'RTK query', isDone: false},
    ])

    const deleteTask = (taskId: string) => {
        const nextState: Array<TaskPropsType> = tasks.filter(t => t.id !== taskId) // удаляем таску с помощью метода фильтер
        setTasks(nextState) // обновляем стейт на новые данные
    }


    const [filter, setFilter] = useState<FiltersValuesType>('all')

    let filteredTasks: Array<TaskPropsType> = [];
    if (filter === 'all') {
        filteredTasks = tasks
    } else if (filter === 'active') {
        filteredTasks = tasks.filter(t => t.isDone === false)
    } else if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.isDone === true)
    }

    const changeTodolistFilter = (newFilterValue: FiltersValuesType) => {
        setFilter(newFilterValue)
    }

    const createTask = (title: string) => {
        const newTask: TaskPropsType = {id: v1(), title: title, isDone: false}
        const nextState: TaskPropsType[] = [...tasks, newTask]
        setTasks(nextState)
    }


    return (
        <div className="app">
            <TodoListItem title={todoListTitle_1}
                          tasks={filteredTasks}
                          deleteTask={deleteTask}
                          changeTodolistFilter={changeTodolistFilter}
                          createTask={createTask}/>
        </div>
    )
}

export default App
