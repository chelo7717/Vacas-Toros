import codSecret from "./VacasToros.js";

describe("Vacas", () => {
  it("deberia devolver *", () => {
    expect(codSecret("2", "2")).toEqual("*");
  });
});