import React, { Component } from 'react'
import { connect } from 'react-redux';
import CategoryDetails from '../Category/Details/CategoryDetails'
import CategoryList from '../Category/List/CategoryList'
import FavouriteJokeList from '../FavouriteJokeList/FavouriteJokeList';

class HomeComponent extends Component<{ dispatch: any, activeCategory: string, favouriteJokes: any }> {
    render() {
        const { dispatch, activeCategory, favouriteJokes } = this.props;
        return (
            <div>
                <h2>My first React Apollo app 🚀</h2>
                <div>
                    <h5>Please select a category:</h5>
                    <CategoryList dispatch={dispatch} activeCategory={activeCategory} />
                </div>
                <div>
                    <CategoryDetails dispatch={dispatch} activeCategory={activeCategory} />
                </div>
                <div>
                    <FavouriteJokeList dispatch={dispatch} favouriteJokes={favouriteJokes} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({ ...state.jokes });

export default connect(mapStateToProps)(HomeComponent)
