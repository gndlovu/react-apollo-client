import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import CategoryItem from './CategoryItem';

it('should render the category item', () => {
    const component = TestRenderer.create(
        <MockedProvider mocks={[]} addTypename={false}>
            <CategoryItem category="animal" />
        </MockedProvider>,
    );

    const tree = component.toJSON();

    expect(tree.children).toContain('animal');
});
