import React from 'react';
import '../styles/global.css';
import '../styles/ProductList.css';
import Select from 'react-select';
import Products from './Products';

const options = [
    { value: 'backpacks', label: 'Backpacks' },
    { value: 'tote bags', label: 'Tote bags' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'lowest price', label: 'Lowest Price' },
    { value: 'highest price', label: 'Highest Price' },
    { value: 'in stock', label: 'In Stock' },
    { value: 'select all', label: 'Select All' }
]

class ProductList extends React.Component {
    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState(
            {selectedOption},
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    render() {
        const {selectedOption} = this.state;

        return (
            <div className="container">
                <div className="shopHeader">
                    <h1>All Products</h1>
                    <div className="shopFilter">
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            isMulti={true}
                            placeholder={'Filter Products'}
                        />
                    </div>
                </div>
                <Products />
            </div>
        );
    }
}

export default ProductList;