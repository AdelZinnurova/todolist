type TodoListTitlePropsType ={
    title: string
    deleteTodolist: (todolistId: string) => void
    todolistId: string
}


export const TodoListTitle = (props: TodoListTitlePropsType) => {
    return (
        <>
            <h3>
                {props.title}
                <button onClick={() => props.deleteTodolist(props.todolistId)}>X</button>
            </h3>
        </>
    );
};