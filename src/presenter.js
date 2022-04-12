import VacasyToros from "./VacasToros";

const CodSecret = document.querySelector("#codigo-Secreto");
const Codigo = document.querySelector("#Codigo");
const form = document.querySelector("#VacasyToros-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const CodSecretR = String.parseString(CodSecret.value);
    const CodigoR = String.parseString(Codigo.value);
  
    div.innerHTML = "<p>" + VacasyToros(CodSecretR, CodigoR) + "</p>";
    
  })