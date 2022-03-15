import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import FetchData from "./FetchData";

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

})

