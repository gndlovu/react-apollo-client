import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import CategoryDetails from './CategoryDetails';
import { GET_RANDOM_JOKE } from '../../../constants/Queries';
const { act } = TestRenderer;

jest.setTimeout(3000);

const jokeMock =
{
    request: {
        query: GET_RANDOM_JOKE,
        variables: { category: 'animal' }
    },
    result: {
        data: {
            getRandomJokeByCategory: {
                "id": "qwwve4bkrygyuhf6whvt4a",
                "value": "The 11th commandment is ?Thou shalt not piss off Chuck Norris? This commandment is rarely enforced, as it is impossible to accomplish.",
                "created_at": "2020-01-05 13:42:29.855523",
                "updated_at": "2020-01-05 13:42:29.855523",
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "url": "https://api.chucknorris.io/jokes/qwwve4bkrygyuhf6whvt4a"
            }
        },
    },
};

it('should render category details', async () => {
    await act(async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={[jokeMock]} addTypename={false}>
                <CategoryDetails activeCategory="animal" favouriteJokes={[]} />
            </MockedProvider>,
        );

        await new Promise(resolve => setTimeout(resolve, 3000)); // wait for response

        const p = component.root.findByType('p');

        expect(p.props.children).toEqual(jokeMock.result.data.getRandomJokeByCategory.value);
    });
});
