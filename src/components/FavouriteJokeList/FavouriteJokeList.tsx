import React, { PureComponent } from 'react'
import { removeFromFavourites, clearFavourites } from '../../actions/jokes';

export class FavouriteJokeList extends PureComponent<{ favouriteJokes: any; dispatch: any }> {
    render() {
        return (
            <>
                {!!this.props.favouriteJokes.size && (
                    <ul className="list-group">
                        <li className="list-group-item bg-purple text-white">
                            My Favorite Jokes
                            <button className="btn btn-danger btn-sm float-right" onClick={() => this.props.dispatch(clearFavourites())}>
                                Clear List
                            </button>
                        </li>
                        {this.props.favouriteJokes.map((joke: any) => {
                            return (
                                <li key={joke.get('id')} className="list-group-item d-flex justify-content-between align-items-center">
                                    <p className="fs-6">{joke.get('value')}</p>
                                    <span className="badge bg-danger rounded-pill pointer" onClick={() => this.props.dispatch(removeFromFavourites(joke.get('id')))}>X</span>
                                </li>
                            );
                        })}
                    </ul>
                )
                }
            </>
        )
    }
}

export default FavouriteJokeList
