import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import CategoryList from './CategoryList';
import { GET_JOKE_CATEGORIES } from '../../../constants/Queries';
const { act } = TestRenderer;

jest.setTimeout(3000);

const categoryMock =
{
    request: {
        query: GET_JOKE_CATEGORIES
    },
    result: {
        data: {
            getCategories: ['animal', 'dev'],
        },
    },
};

it('should initially render the loading state', () => {
    const component = TestRenderer.create(
        <MockedProvider mocks={[categoryMock]} addTypename={false}>
            <CategoryList />
        </MockedProvider>,
    );

    const tree = component.toJSON();
    expect(tree.props.className).toContain('three-o-loading text-center');
});

it('should render without any errors', async () => {
    await act(async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={[categoryMock]} addTypename={false}>
                <CategoryList />
            </MockedProvider>,
        );

        await new Promise(resolve => setTimeout(resolve, 10000)); // wait for response

        const tree = component.toJSON();

        // animal and dev buttons
        expect(tree.children.length).toBe(2);
    });
});

it('should show error UI', async () => {
    const categoryMock = [{
        request: {
            query: GET_JOKE_CATEGORIES
        },
        error: new Error('An error occurred'),
    }];

    await act(async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={categoryMock} addTypename={false}>
                <CategoryList />
            </MockedProvider>,
        );

        await new Promise(resolve => setTimeout(resolve, 10000)); // wait for response

        const tree = component.toJSON();
        expect(tree.children).toContain('An error occurred');
    });
});