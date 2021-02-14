import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomeComponent from '../Home/HomeComponent';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <HomeComponent />
            </div>
        </ApolloProvider>
    );
}

export default App;
