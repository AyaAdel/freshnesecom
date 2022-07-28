import React from 'react';
import { screen, cleanup, waitFor } from '@testing-library/react';
import Product from '../Product';
import { ProductItem } from 'types/products';
import renderer from 'react-test-renderer';
import { RenderComponent } from 'utils/test/render';

const productMock: ProductItem = {
  brand: 'Apple',
  category: 'smartphones',
  description: 'An apple mobile which is nothing like apple',
  discountPercentage: 12.96,
  id: 1,
  images: [
    'https://dummyjson.com/image/i/products/1/1.jpg',
    'https://dummyjson.com/image/i/products/1/2.jpg',
  ],
  price: 549,
  rating: 4.69,
  stock: 94,
  thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
  title: 'iPhone 9',
};

function MyComponent() {
  return (
    <RenderComponent>
      <Product {...productMock} />
    </RenderComponent>
  );
}

describe('Product', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const tree = renderer.create(<MyComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
