import { render, screen, waitFor, act, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { RenderComponent } from 'utils/test/render';
import SearchProducts from '../SearchProducts';

function MyComponent() {
  return (
    <RenderComponent>
      <SearchProducts />
    </RenderComponent>
  );
}

it('Render Search Categories Correctly', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
