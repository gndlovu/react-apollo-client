import React, { PureComponent } from 'react'

export class FavouriteJokeList extends PureComponent<{ favouriteJokes: any; dispatch: any }> {
    render() {
        return (
            <div>
                {!!this.props.favouriteJokes.size && (
                    <ul className="list-group">
                        {this.props.favouriteJokes.map((joke: any) => {
                            return (
                                <li key={joke.get('id')}>{joke.get('value')}</li>
                            );
                        })}
                    </ul>
                )}
            </div>
        )
    }
}

export default FavouriteJokeList
