import {ChangeEvent, KeyboardEvent, useState} from "react";

type CreateItemFormPropsType = {
    createItem: (title: string) => void
}

export const CreateItemForm = (props: CreateItemFormPropsType) => {
    const [itemTitle, setItemTitle] = useState("");
    const [error, setError] = useState<string | null>(null);
    const isAddBtnDisabled = !itemTitle || itemTitle.length > 10
    const setTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setItemTitle(e.currentTarget.value)
        setError(null)
    }
    const createItemHandler = () => {
        const trimmedTaskTitle = itemTitle.trim()
        if(trimmedTaskTitle !== '') {
            props.createItem(trimmedTaskTitle)
            setItemTitle('')
        } else {
            setError('Title is required!')
        }
        setItemTitle("");
    }
    const createTaskOnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isAddBtnDisabled) {
            createItemHandler()
        }
    }

    return (
        <div>
            <input
                placeholder='Enter title'
                value={itemTitle}
                onKeyDown={createTaskOnKeyDownHandler}
                onChange={setTaskTitleHandler}
                className={!!error ? 'task-input-error' : 'task-input'}/>
            <button onClick={createItemHandler}
                    disabled={isAddBtnDisabled}>
                +
            </button>
            {error && <div style={{color: 'red'}}>{error}</div>}
            {itemTitle && <div>Max title length is 10 charters</div>}
            {itemTitle.length > 10 && <div style={{color: 'red'}}>Title length is too long</div>}
        </div>
    );
};