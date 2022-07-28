import React from 'react';
import renderer from 'react-test-renderer';
import { RenderComponent } from 'utils/test/render';
import Footer from '../Footer';

function MyComponent() {
  return (
    <RenderComponent>
      <Footer />
    </RenderComponent>
  );
}

it('Render Footer Correctly', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
