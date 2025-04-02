type TodoListTitlePropsType ={
    title: string
}


export const TodoListTitle = (props: TodoListTitlePropsType) => {
    return (
        <h3>{props.title}</h3>
    );
};