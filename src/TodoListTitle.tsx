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
                <button className='btn-delete' onClick={() => props.deleteTodolist(props.todolistId)}>x</button>
            </h3>
        </>
    );
};