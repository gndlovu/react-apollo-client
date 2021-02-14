import React, { Component } from 'react'
import { connect } from 'react-redux';
import CategoryDetails from '../Category/Details/CategoryDetails'
import CategoryList from '../Category/List/CategoryList'

class HomeComponent extends Component<{ dispatch: any, activeCategory: string }> {
    render() {
        const { dispatch, activeCategory } = this.props;
        return (
            <div>
                <h2>My first React Apollo app 🚀</h2>
                <div>
                    <h5>Please select a category:</h5>
                    <CategoryList dispatch={dispatch} activeCategory={activeCategory} />
                </div>
                <div>
                    <CategoryDetails activeCategory={activeCategory} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({ ...state.jokes });

export default connect(mapStateToProps)(HomeComponent)
