import {render, fireEvent} from "@testing-library/react";
import {Header} from "../Header";

it("searchRenderCheck", () => {
    const {queryByTitle} = render(<Header/>);
    const input = queryByTitle("dummySearch");
    expect(input).toBeTruthy();
})

describe("changeInput", () => {
    it("onChange", () => {
        const {queryByTitle} = render(<Header/>)
        const input = queryByTitle("dummySearch");
        fireEvent.change(input, {target: {value: "Tashkent"}});
        expect(input.value).toBe("Tashkent");
    })
})
