import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Greeting/i);
  expect(linkElement).toBeInTheDocument();
});

test('render label', () => {
  render(<App/>);
  const labelid = screen.getByTestId("label");
  expect(labelid).toBeInTheDocument();
})

test('render form', () => {
  render(<App/>);
  const formelement = screen.getByTestId("form");
  expect(formelement);
})

test('render button',() => {
  render(<App/>);
  const buttonId = screen.getByRole("button", {name : /Say Hello/i });
  expect(buttonId).toBeInTheDocument();
})

test('handlechange update name status', () => {
  const {getByLabelText} = render(<App/>);
  const getChangeelement = getByLabelText(/Enter your name/i);
  fireEvent.change(getChangeelement,{target :{value : 'Ragu'}});
  expect(getChangeelement.value).toBe('Ragu');
})

test('handleClick sets the current name', () => {
  const {getByLabelText, getByText} = render(<App/>);
  const getChangeelement = getByLabelText(/Enter your name/i);
  const submitchange = getByText(/Say Hello/i);

  fireEvent.change(getChangeelement,{target :{value : 'vijay'}});
  fireEvent.click(submitchange);

  const name = getByText(/Hello, vijay!/i);
  expect(name).toBeInTheDocument("Hello, vijay!");
})

