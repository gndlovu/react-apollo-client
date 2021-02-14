import { gql } from '@apollo/client';

export const GET_RANDOM_JOKE = gql`
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

export const GET_JOKE_CATEGORIES = gql`
    query { getCategories }
`;