import {useState, KeyboardEvent, ChangeEvent} from "react";


type AddTaskFormPropsType = {
    createTask: (title: string, todolistId: string) => void
    disabled?: boolean
    todolistId: string

}

export const AddTaskForm = (props: AddTaskFormPropsType) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [error, setErrors] = useState<string | null>(null);
    const createTaskHandler = () => {
        const trimmedTaskTitle = taskTitle.trim()
        if(trimmedTaskTitle !== '') {
            props.createTask(trimmedTaskTitle, props.todolistId)
            setTaskTitle('')
        } else {
            setErrors('Title is required!')
        }
        setTaskTitle("");
    }
    const createTaskOnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isAddBtnDisabled) {
            createTaskHandler()
        }
    }
    const setTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.currentTarget.value)
    const isAddBtnDisabled = !taskTitle || taskTitle.length > 10


    return (
        <div>
            <input
                placeholder='Enter title'
                value={taskTitle}
                onKeyDown={createTaskOnKeyDownHandler}
                onChange={setTaskTitleHandler}
                className={!!error ? 'task-input-error' : ''}/>
            <button onClick={createTaskHandler}
                    disabled={isAddBtnDisabled}>
                +
            </button>

            {taskTitle && <div>Max title length is 10 charters</div>}
            {taskTitle.length > 10 && <div style={{color: 'red'}}>Title length is too long</div>}
            {error && <div style={{color: 'red'}}>{error}</div>}
        </div>
    );
};
