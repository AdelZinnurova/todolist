import {useRef} from "react";

type AddTaskFormPropsType = {
    createTask: (title: string) => void
}

export const AddTaskForm = (props: AddTaskFormPropsType) => {
    const taskInputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={taskInputRef}/>
            <button onClick={() => {
                if (taskInputRef.current) {
                    props.createTask(taskInputRef.current.value)
                    taskInputRef.current.value = ""
                }
            }}>+
            </button>
        </div>
    );
};
