import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import CategoryList from './CategoryList';
import { GET_JOKE_CATEGORIES } from '../../../constants/Queries';

const mocks = [
    {
        request: {
            query: GET_JOKE_CATEGORIES,
            variables: {
                category: 'animal',
            },
        },
        result: {
            data: {
                getCategories: ['animal', 'dev'],
            },
        },
    },
];

it('renders without error', () => {
    const component = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <CategoryList />
        </MockedProvider>,
    );

    const tree = component.toJSON();
    expect(tree.props.className).toContain('three-o-loading text-center');
});