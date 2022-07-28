import React from 'react';
import renderer from 'react-test-renderer';
import { RenderComponent } from 'utils/test/render';
import Home from '../Home';

function MyComponent() {
  return (
    <RenderComponent>
      <Home />
    </RenderComponent>
  );
}

it('Render Home Correctly', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
