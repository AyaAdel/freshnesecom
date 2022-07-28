import React from 'react';
import renderer from 'react-test-renderer';
import { RenderComponent } from 'utils/test/render';
import ProductsCategories from '../ProductsCategories';

function MyComponent() {
  return (
    <RenderComponent>
      <ProductsCategories />
    </RenderComponent>
  );
}

it('Render Products Categories Correctly', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
