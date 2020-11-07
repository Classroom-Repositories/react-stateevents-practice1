import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DogCard from '../Components/DogCard';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with dog's name", () => {
    act(() => {
        render(<DogCard />, container);
    });
    // console.log(container.querySelector("h2").textContent)
    expect(container.querySelector("h2").textContent).not.toBe("");

});
it("renders with dog's image", () => {
    act(() => {
        render(<DogCard />, container);
    });
    // console.log(container.querySelector("h2").textContent)
    expect(container.querySelector("img").src).not.toBe("");

});
