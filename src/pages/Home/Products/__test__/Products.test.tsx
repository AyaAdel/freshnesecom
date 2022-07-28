import React from 'react';
import renderer from 'react-test-renderer';
import { RenderComponent } from 'utils/test/render';
import Products from '../Products';

function MyComponent() {
  return (
    <RenderComponent>
      <Products />
    </RenderComponent>
  );
}

it('Render Products Correctly', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
