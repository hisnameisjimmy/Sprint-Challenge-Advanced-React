import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from "./Components/NavBar.js";
import DataFetch from "./Components/DataFetch.js";
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

// it("Data is Rendered", async = () => {
//   axiosMock.get.mockResolvedValueOnce({
//     data: {
//       players: {
//         name: "Alex Morgan",
//         country: "United States",
//         searches: 100,
//         id: 0
//       }
//     }
//   });

// });

// test('data is rendered', async () => {
//   await rtl.wait(() => {
//     expect(getByText('Alex Morgan')).toBeInTheDocument()
//   })

//   const firstName = await waitForElement(() => getByText("Morgan"));
// })''

// test('data is rendered', async () => {
//   const wrapper = rtl.render(<App />);
//   expect(await wrapper.getByText(/Alex Morgan/i)).toBeInTheDocument();
// });

test('data is rendered', async () => {
  const { getByText } = rtl.render(<App />);
  const firstPlayer = await rtl.findByText(/Alex Morgan/);
  expect(firstPlayer).toBeInTheDocument();
});




it("renders the navbar", () => {
  const wrapper = rtl.render(<Navbar />);
  expect(wrapper.getByText(/World Cup/i)).toBeInTheDocument();
});

it("dark mode button", () => {
  const wrapper = rtl.render(<Navbar />);
  expect(wrapper.getByText(/Dark Mode/i)).toBeInTheDocument();
});

// it('renders dark mode button', () => {
//   const wrapper = rtl.render(<App />);
//   expect(wrapper.getByText(/THIS WILL MAKE THE TEST CRASH AND BURN/i));
// });