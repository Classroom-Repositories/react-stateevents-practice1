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
    expect(container.querySelector("h2").textContent).toBeTruthy();
});
it("renders with dog's image", () => {
    act(() => {
        render(<DogCard />, container);
    });
    expect(container.querySelector("img").src).toBeTruthy();
});
it("toggles bark when clicked", () => {
    act(() => {
        render(<DogCard />, container);
    });
    let button = container.querySelector("button");
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    // console.log(expect())
    expect(container.querySelector("h3")).toBeTruthy();

    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(container.querySelector("h3")).toBeFalsy();
});
