import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import FetchData from "./FetchData";
import Login from '../pages/login/Login';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

import { App, displayLocation } from "../App";
const values = [
    ["1", "Apples"],
    ["2", "Oranges"],
    ["3", "Apples"],]

describe('render app', () => {
    test('render button to show Nothing Changed', () => {
        render(<FetchData />);

        const buttonChanged = screen.getByRole('button');
        userEvent.click(buttonChanged);

        const buttonElement = screen.getByText("nothing changed", { exact: false })
        expect(buttonElement).toBeInTheDocument()
    })
    test('render the list items', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'a1', title: 'Orange' }]
        })
        render(<FetchData />);

        const row = await screen.findAllByRole("rowgroup")
        expect(row).not.toHaveLength(0);

    })


})



// describe('Login compounds', () => {
//     test('render the input button', () => {
//         render(<Login />);
//         const element = screen.getByTestId('input');
//         fireEvent.change(element, { target: { value: "abishek" } })
//         expect(element).toHaveValue('abishek');

//     })
//     test('render the room element', () => {
//         render(<Login />);
//         const element = screen.getByTestId('room');
//         fireEvent.change(element, { target: { value: "2" } })
//         expect(element).toHaveValue('2');
//     })
//     test('Verify the  button onChange', async () => {
//         const handleChage = jest.fn().mockResolvedValue()
//         await handleChage()
//         render(<Login />);
//         const button = screen.getByTestId("btn")
//         fireEvent.submit(button);
//         console.log(button, "button");
//         expect(handleChage).toBeCalled()

//     })
// })
// describe("App Compounds Router", () => {
//     test('Link Compounds', () => {
//         // const history = createMemoryHistory();
//         // const route = '/some-route'
//         // history.push(route)

//         // render(
//         //     <Router history={history} >
//         //         <displayLocation />
//         //     </Router>)
//         // expect(screen.getByTestId('location-display')).toHaveTextContent(route)
//         expect(screen.getByText(/login/i)).toBeInTheDocument()
//         const Click = { button: 0 };
//         userEvent.click(screen.getByText(/about/i), Click)
//         expect(screen.getByText(/your at chat page/i)).toBeInTheDocument()


//     })

// })