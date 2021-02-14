import React from "react";
import { useQuery, gql } from '@apollo/client';
import CategoryItem from '../Item/CategoryItem';

const JOKE_CATEGORIES = gql`
  query { getCategories }
`;

export default function CategoryList(props: any) {
    const { loading, error, data } = useQuery(JOKE_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <ul>
            {
                data.getCategories.map((category: string) => (
                    <CategoryItem key={category} category={category} dispatch={props.dispatch} />
                ))
            }
        </ul>
    );
}