import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import FetchData from "./FetchData";
import Login from '../pages/login/Login';
const values = [
    ["1", "Apples"],
    ["2", "Oranges"],
    ["3", "Apples"],
];

describe('FetchData compounds', () => {
    test('render the Table flow', () => {
        render(<FetchData />);
        const texting = screen.getByText('Table Flow', { exact: true });
        expect(texting).toBeInTheDocument();
    })
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

describe('Login compounds', () => {
    test('render the input button', () => {
        render(<Login />);
        // const input = screen.getAllByTestId("input")
        // fireEvent.change(input, { target: { value: "abishek" } })
        // expect(input).toBeTruthy()

    })
})
