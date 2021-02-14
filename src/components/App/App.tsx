import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomeComponent from '../Home/HomeComponent';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
});

function App(props: any) {
    return (
        <ApolloProvider client={client}>
            <div className="container">
                <HomeComponent dispatch={props.dispatch} activeCategory={props.activeCategory} favouriteJokes={props.favouriteJokes} />
            </div>
        </ApolloProvider>
    );
}

export default App;
