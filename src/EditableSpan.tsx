import {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {

    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [itemTitle, setItemTitle] = useState(props.title);

    const onEditMode = () => setIsEditMode(true)
    const offEditMode = () => {
        props.changeTitle(itemTitle)
        setIsEditMode(false)
    }
    const setItemTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setItemTitle(e.currentTarget.value)
    }

    return (
        <div>
            {isEditMode
                ? <input
                    value={itemTitle}
                    onChange={setItemTitleHandler}
                    onBlur={offEditMode}
                    autoFocus
                />
                : <span onDoubleClick={onEditMode}>{props.title}</span>
            }
        </div>
    );

};