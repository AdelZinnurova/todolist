import './App.css'
import {TaskPropsType, TodoListItem} from "./TodoListItem.tsx";

function App() {
  //BLL (бизнес данные)
  const todoListTitle_1 = 'What to learn'
  const todoListTitle_2 = 'What to buy'

  const tasks_1: TaskPropsType[] = [
    // {
    //     id: 1,
    //     title: 'HTML&CSS',
    //     isDone: true
    // },
    // {
    //     id: 2,
    //     title: 'JS',
    //     isDone: true
    // },
    // {
    //     id: 3,
    //     title: 'React',
    //     isDone: false
    // }
  ]
  const tasks_2: TaskPropsType[] = [
    {
      id: 4,
      title: 'cat',
      isDone: true
    },
    {
      id: 5,
      title: 'dog',
      isDone: true
    },
    {
      id: 6,
      title: 'cow',
      isDone: false
    },
    {
      id: 7,
      title: 'mouse',
      isDone: false
    }
  ]




  // UI (интерфейс)
  return (
      <div className="app">
        <TodoListItem title={todoListTitle_1} tasks={tasks_1}/>
        <TodoListItem title={todoListTitle_2} tasks={tasks_2}/>
      </div>
  )
}

export default App
