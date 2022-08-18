import React from "react"

class FilterPlaces extends React.Component {

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'scroll';
    }

    render() {
        const { filterArray, handleSubcategoriesClick } = this.props;

        return (
            filterArray.map((filterName, i) => (
                <div key={i}>
                    <p className='filter-category' data-value={filterName.name} onClick={handleSubcategoriesClick}>
                        {filterName.name}
                    </p>
                    <div>
                        {filterName.subcategories.map((subcategory, i) => (
                            <p className={`filter-subcategory ${filterName.selected ? 'show' : ''}`} key={i}>{subcategory.name}</p>
                        ))}
                    </div>
                </div>
            ))
        )
    }
}

export default FilterPlaces;

