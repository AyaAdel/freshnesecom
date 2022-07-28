import { render, screen, waitFor, act, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { RenderComponent } from 'utils/test/render';
import Dropdown from '../Dropdown';
import userEvent from '@testing-library/user-event';

function MyComponent() {
  return (
    <RenderComponent>
      <Dropdown defaultSelected="Title" list={['dropdown 1']} />
    </RenderComponent>
  );
}

describe('Dropdown', () => {
  afterEach(cleanup);

  it('Render Dropdown Correctly', () => {
    const tree = renderer.create(<MyComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Show Dropdown list onClick', async () => {
    act(() => {
      render(<MyComponent />);
    });

    userEvent.click(screen.getByTestId('dropdown-list-selected'));

    await waitFor(() => {
      expect(screen.getByText('dropdown 1')).toBeInTheDocument();
    });
  });

  it('Change Default Selected Title', async () => {
    act(() => {
      render(<MyComponent />);
    });

    userEvent.click(screen.getByTestId('dropdown-list-selected'));

    await waitFor(() => {
      screen.getByText('dropdown 1');
    });

    userEvent.click(screen.getByText('dropdown 1'));

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-list-selected')).toHaveTextContent(
        'dropdown 1'
      );
    });
  });
});
