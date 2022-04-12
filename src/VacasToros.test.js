import VacasyToros from "./VacasToros.js";

describe("Vacas", () => {
  it("deberia devolver *", () => {
    expect(VacasyToros("2", "2")).toEqual("*");
  });
  it("deberia devolver * *", () => {
    expect(VacasyToros("2,3", "2,3")).toEqual("**");
  });
  it("deberia devolver * * ", () => {
    expect(VacasyToros("2,3,4", "2,3,5")).toEqual("**");
  });
  it("deberia devolver ! ! ", () => {
    expect(VacasyToros("3,2,5", "2,3,4")).toEqual("!!");
  });
  it("deberia devolver  *!! ", () => {
    expect(VacasyToros("3,2,4", "2,3,4")).toEqual("*!!");
  });
  it("deberia devolver  **!! ", () => {
    expect(VacasyToros("3,2,4,5", "2,3,4,5")).toEqual("**!!");
  });
  it("deberia devolver  *!! ", () => {
    expect(VacasyToros("3,2,7,5", "2,3,4,5")).toEqual("*!!");
  });
  it("deberia devolver  *#!! ", () => {
    expect(VacasyToros("3,2,5,5", "2,3,4,5")).toEqual("*#!!");
  });
});