import {FiltersValuesType} from "./App.tsx";

type FilterButtonsPropsType = {
    changeTodolistFilter: (newFilterValue: FiltersValuesType) => void
}

export const FilterButtons = ({changeTodolistFilter}: FilterButtonsPropsType) => {
    return (
        <div>
            <button onClick={() => changeTodolistFilter('all')}>All</button>
            <button onClick={() => changeTodolistFilter('active')}>Active</button>
            <button onClick={() => changeTodolistFilter('completed')}>Completed</button>
        </div>
    );
};