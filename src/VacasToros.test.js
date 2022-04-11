import codSecret from "./VacasToros.js";

describe("Vacas", () => {
  it("deberia devolver *", () => {
    expect(codSecret("1", "1")).toEqual("*");
  });
});