import {useState} from "react";

type AddTaskFormPropsType = {
    createTask: (title: string) => void
    disabled?: boolean
}

export const AddTaskForm = (props: AddTaskFormPropsType) => {
    const [taskTitle, setTaskTitle] = useState("");

    return (
        <div>
            <input
                placeholder='Enter title'
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
            <button onClick={() => {
                props.createTask(taskTitle)
            }}
                    disabled={!taskTitle || taskTitle.length > 10}>
                +
            </button>

            {taskTitle && <div>Max title length is 10 charters</div>}
            {taskTitle.length > 10 && <div style={{color: 'red'}}>Title length is too long</div>}
        </div>
    );
};
