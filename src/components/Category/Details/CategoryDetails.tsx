import React from "react";
import { gql, useLazyQuery } from '@apollo/client';
import { addToFavourites } from '../../../actions/jokes';

const RANDOM_JOKE = gql`
  query getRandomJokeByCategory($category: String!) {
    getRandomJokeByCategory(category: $category) {
      id
      value
      created_at
      updated_at
      icon_url
      url
    }
  }
`;

export default function CategoryDetails(props: any) {
    const [loadJoke, { called, loading, error, data }] = useLazyQuery(
        RANDOM_JOKE,
        {
            variables: { category: props.activeCategory }
        }
    );

    if (called && loading) return <span>Loading random joke...</span>
    if (error) return <span>Error :(</span>;

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