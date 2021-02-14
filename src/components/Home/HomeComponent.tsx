import React, { Component } from 'react'
import { connect } from 'react-redux';
import CategoryDetails from '../Category/Details/CategoryDetails'
import CategoryList from '../Category/List/CategoryList'
import FavouriteJokeList from '../FavouriteJokeList/FavouriteJokeList';
import logo from '../../assets/img/logo.svg';
class HomeComponent extends Component<{ dispatch: any, activeCategory: string, favouriteJokes: any }> {
    render() {
        const { dispatch, activeCategory, favouriteJokes } = this.props;
        return (
            <div>
                <div className="d-flex align-items-center p-3 mt-3 text-white bg-purple rounded shadow-lg">
                    <img className="me-3" src={logo} alt="" width="55" height="55" />
                    <h1 className="h5 mb-0 text-white">react-apollo</h1>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                        <CategoryList dispatch={dispatch} activeCategory={activeCategory} />
                    </div>
                    <div className="col-md-8">
                        <div>
                            <CategoryDetails dispatch={dispatch} favouriteJokes={favouriteJokes} activeCategory={activeCategory} />
                        </div>
                        <div className="mt-2">
                            <FavouriteJokeList dispatch={dispatch} favouriteJokes={favouriteJokes} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state: any) => ({ ...state.jokes });

export default connect(mapStateToProps)(HomeComponent)
