import './App.css'
import {TaskPropsType, TodoListItem} from "./TodoListItem.tsx";
import {useState} from "react";

export type FiltersValuesType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState<Array<TaskPropsType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const deleteTask = (taskId: number) => {
        const nextState: Array<TaskPropsType> = tasks.filter(t => t.id !== taskId) // удаляем таску с помощью метода фильтер
        setTasks(nextState) // обновляем стейт на новые данные
    }

    //BLL (бизнес данные)
    const todoListTitle_1 = 'What to learn'

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

    // UI (интерфейс)
    return (
        <div className="app">
            <TodoListItem title={todoListTitle_1} tasks={filteredTasks} deleteTask={deleteTask}
                          changeTodolistFilter={changeTodolistFilter}/>
        </div>
    )
}

export default App
