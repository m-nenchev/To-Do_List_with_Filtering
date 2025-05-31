import React from 'react';
import type{ Filter } from '../../models/types';

interface Props {
    currentFilter: Filter;
    onChange: (filter: Filter) => void;
}
//Shows 3 buttons: All / Active / Completed.
// When the user selects a button, passes the value to App.tsx via onChange
const FilterButtons: React.FC<Props> = ({ currentFilter, onChange }) => {
const filters: Filter[] = ['all', 'active', 'completed'];
return (
    <div className="filter-buttons">
        {filters.map(filter => (
            <button
                key={filter}
                onClick={():void => onChange(filter)}
                disabled={filter === currentFilter}
            >
                {filter.toUpperCase()}
            </button>
        ))}
    </div>
  );
};
export default FilterButtons;