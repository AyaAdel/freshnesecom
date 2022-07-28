import React from 'react';
import renderer from 'react-test-renderer';
import { RenderComponent } from 'utils/test/render';
import Header from '../Header';

function MyComponent() {
  return (
    <RenderComponent>
      <Header />
    </RenderComponent>
  );
}

it('Render Header Correctly', async () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
