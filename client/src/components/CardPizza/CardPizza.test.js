import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react"
import CardPizza from './CardPizza.jsx'

test('render content', () => {
    const data = {
        title: "Title test",
        description: "Description test",
        price: "20000",
    }

    const component = render(<CardPizza data={data} />)

    component.getByText("Title test")
    component.getByText("Description test")
    component.getByText("Precio: $20000")
    component.getByText("Pedir")

})

// test('clicking the button calls event handler once', () => {
//     // const data = {
//     //    id: 1,
//     // }

//         const mockHandler = jest.fn()

//         const component = render(<CardPizza toggleImportance={mockHandler} />)

//         const button = component.getByText('Pedir')
//         fireEvent.click(button)

//         expect(mockHandler.mock.calls).toHaveLength(1)
// })