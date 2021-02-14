import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeComponent from '../Home/HomeComponent';
import rootReducer from '../../reducers';
const store = createStore(rootReducer);

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
});

function App(props: any) {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <div className="container">
                    <HomeComponent dispatch={props.dispatch} activeCategory={props.activeCategory} favouriteJokes={props.favouriteJokes} />
                </div>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
