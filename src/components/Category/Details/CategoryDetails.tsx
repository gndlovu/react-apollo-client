import React from "react";
import { gql, useLazyQuery } from '@apollo/client';

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

export default function CategoryDetails(props: { activeCategory: string }) {
    const [loadJoke, { called, loading, error, data }] = useLazyQuery(
        RANDOM_JOKE,
        {
            variables: { category: props.activeCategory }
        }
    );

    if (called && loading) return <p>Loading ...</p>
    if (error) return <p>Error :(</p>;

    // No category selected yet.
    if (!props.activeCategory) { return <></> }

    if (!called) {
        loadJoke();

        return <></>;
    }

    return (
        <div>
            {data.getRandomJokeByCategory.value}
        </div>
    );
}