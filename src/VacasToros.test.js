import Vacas from "./VacasToros.js";

describe("Vacas", () => {
  it("deberia devolver *", () => {
    expect(Vacas("2", "2")).toEqual("*");
  });
  it("deberia devolver * *", () => {
    expect(Vacas("2,3", "2,3")).toEqual("**");
  });
  it("deberia devolver * * ", () => {
    expect(Vacas("2,3,4", "2,3,5")).toEqual("**");
  });
  it("deberia devolver * * ! ", () => {
    expect(Vacas("3,2,4", "2,3,4")).toEqual("!!*");
  });
});