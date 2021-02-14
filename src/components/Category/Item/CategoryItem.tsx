import React from "react";
import { selectCategory } from '../../../actions/jokes';

export default function CategoryItem(props: any) {
    return <li onClick={() => props.dispatch(selectCategory(props.category))}>select {props.category}</li>
}