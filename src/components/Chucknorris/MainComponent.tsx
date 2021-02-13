import React, { Component } from 'react'
import CategoryComponent from './Category/CategoryComponent';
import JokeComponent from './Joke/JokeComponent';

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <CategoryComponent />
                <JokeComponent />
            </div>
        )
    }
}

export default MainComponent
