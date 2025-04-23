import {FiltersValuesType} from "./App.tsx";

type FilterButtonsPropsType = {
    changeTodolistFilter: (newFilterValue: FiltersValuesType, todolistId: string) => void
    filter: FiltersValuesType
    todolistId: string
}

export const FilterButtons = ({changeTodolistFilter, filter, todolistId}: FilterButtonsPropsType) => {
    return (
        <div>
            <button className={filter === 'all' ? 'filter-btn-active' : ''} onClick={() => changeTodolistFilter('all', todolistId)}>All</button>
            <button className={filter === 'active' ? 'filter-btn-active' : ''}  onClick={() => changeTodolistFilter('active', todolistId)}>Active</button>
            <button className={filter === 'completed' ? 'filter-btn-active' : ''}  onClick={() => changeTodolistFilter('completed', todolistId)}>Completed</button>
        </div>
    );
};