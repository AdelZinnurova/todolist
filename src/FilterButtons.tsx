import {FiltersValuesType} from "./App.tsx";

type FilterButtonsPropsType = {
    changeTodolistFilter: (newFilterValue: FiltersValuesType) => void
    filter: FiltersValuesType
}

export const FilterButtons = ({changeTodolistFilter, filter}: FilterButtonsPropsType) => {
    return (
        <div>
            <button className={filter === 'all' ? 'filter-btn-active' : ''} onClick={() => changeTodolistFilter('all')}>All</button>
            <button className={filter === 'active' ? 'filter-btn-active' : ''}  onClick={() => changeTodolistFilter('active')}>Active</button>
            <button className={filter === 'completed' ? 'filter-btn-active' : ''}  onClick={() => changeTodolistFilter('completed')}>Completed</button>
        </div>
    );
};