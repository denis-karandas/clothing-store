import React from 'react'
import PropTypes from 'prop-types'
import Filter from "../Filter/Filter"
import './FilterSection.scss'

const FilterSection = ({ filters }) => {
    return (
        <div className="catalog__left">
            <h2>Filters</h2>
            <div className="filters">
                {
                    filters && filters.map((filter, i) => {
                        return <Filter
                            key={`${filter.type}_${i}`}
                            id={i}
                            filter={filter}
                        />
                    })
                }
            </div>
        </div>
    )
}

FilterSection.propTypes = {
    filters: PropTypes.array
}

export default FilterSection