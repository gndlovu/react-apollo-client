import React from "react";
import { useQuery } from '@apollo/client';
import CategoryItem from '../Item/CategoryItem';
import Loader from '../../Loader/Loader';
import { GET_JOKE_CATEGORIES } from '../../../constants/Queries';

export default function CategoryList(props: any) {
    const { loading, error, data } = useQuery(GET_JOKE_CATEGORIES);

    if (loading) return <Loader />;
    if (error !== undefined) return <p>An error occurred</p>;

    return (
        <div className="list-group">
            {
                data.getCategories.map((category: string) => (
                    <CategoryItem key={category} category={category} dispatch={props.dispatch} />
                ))
            }
        </div>
    );
}