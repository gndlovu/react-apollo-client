import React, { Component } from 'react'
import CategoryDetails from '../Category/Details/CategoryDetails'
import CategoryList from '../Category/List/CategoryList'

export class HomeComponent extends Component<{}, { category: string }> {
    constructor(props: {}) {
        super(props)

        this.state = {
            category: ''
        }
    }

    handleSelection = (category: string) => {
        this.setState({ category })
    }

    render() {
        return (
            <div>
                <h2>My first React Apollo app 🚀</h2>
                <div>
                    <h5>Please select a category:</h5>
                    <CategoryList categorySelect={this.handleSelection} />
                </div>
                <div>
                    <CategoryDetails category={this.state.category} />
                </div>
            </div>
        )
    }
}

export default HomeComponent
