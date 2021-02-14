import React, { Component } from "react";

export default function CategoryItem(props: any) {
    const setCategory = (category: any) => {
        props.selectCategory(category);
    };

    return <li onClick={() => setCategory(props.category)}>{props.category}</li>
}