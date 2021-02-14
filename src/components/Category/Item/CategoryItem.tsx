import React from "react";
import { selectCategory } from '../../../actions/jokes';

export default function CategoryItem(props: any) {
    return (
        <button className="py-1 list-group-item list-group-item-action" onClick={() => props.dispatch(selectCategory(props.category))}>
            {props.category}
        </button>
    )
}