import add from "../src/add";

describe("Testing add function", () => {
    it("Should return 2 for add(1,1)", () => {
        let a : number = 1;
        let b : number = 1;
        let result : number = add(a,b);
        expect(result).toBe(2);
    })
});