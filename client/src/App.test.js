import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("rtl renders without crashing", () => {
  render(<App />);
});

test("contains a title that says players", () => {
  const expectedPlayerElements = 1;
  const container = render(<App />);
  const getAllByText = container.getAllByText;

  const playerElements = getAllByText(/Players/i);
  expect(playerElements.length).toBe(expectedPlayerElements);
});

test("contains player data", () => {
  const { getByTestId } = render(<App />);

  getByTestId("player-data");
});
