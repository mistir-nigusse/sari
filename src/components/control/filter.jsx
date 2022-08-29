// import filterIcon from '../../icons/filter.svg'
import React from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const filterIcon = <FontAwesomeIcon icon={faFilter} />
const Filter = () => {
    return <div className="filter">
        <div className="icon">{filterIcon}</div>
        <div className="text">Filter</div>
    </div>
}

export default Filter;