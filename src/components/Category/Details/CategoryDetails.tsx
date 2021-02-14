import React from "react";
import { useLazyQuery } from '@apollo/client';
import { addToFavourites } from '../../../actions/jokes';
import Loader from '../../Loader/Loader';
import { GET_RANDOM_JOKE } from '../../../constants/Queries';

export default function CategoryDetails(props: any) {
    const [loadJoke, { called, loading, error, data }] = useLazyQuery(
        GET_RANDOM_JOKE,
        {
            variables: { category: props.activeCategory }
        }
    );

    console.log('error', error);
    if (called && loading) return <Loader />;
    if (error !== undefined) return <p>An error occurred</p>;

    // No category selected yet.
    if (!props.activeCategory) { return <></> }

    if (!called) {
        loadJoke();

        return <></>;
    }

    const checkJoke = (randomJoke: any) => {
        return props.favouriteJokes.filter((joke: any) => joke.get('id') === randomJoke.id).size > 0;
    };

    const jokeExist = checkJoke(data.getRandomJokeByCategory);

    return (
        <div className="card px-3">
            <div className="card-body">
                <p className="text-info">{data.getRandomJokeByCategory.value}</p>

                {!jokeExist && (
                    <button className="btn btn-primary btn-sm float-right" onClick={() => props.dispatch(addToFavourites(data.getRandomJokeByCategory))}>
                        Add to favourites
                    </button>
                )}
            </div>
        </div>
    );
}