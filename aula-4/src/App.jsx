import "./style.css";

function App() {
  let num = 0;

  const addInput = () => {
    const input = document.createElement("input");
    input.type = "submit";
    input.value = "VERIFICAR APROVAÇÃO";
    input.onclick = calculate;
    input.addEventListener("click", () => {
      calculate;
    });
    document.getElementById("gradesAndFrequencies").appendChild(input);
  };

  const periodsNumber = () => {
    const number = document.getElementById("numberOfPeriods").value;

    if (number > 10 || number < 1) {
      alert("DIGITE UMA QUANTIDADE VÁLIDA");
      document.getElementById("numberOfPeriods").value = "";
      return;
    }

    document.getElementById("periods").style.display = "none";
    document.getElementById("gradesAndFrequencies").innerHTML = "";

    for (let i = 1; i <= number; i++) {
      document.getElementById("gradesAndFrequencies").innerHTML += `
        <div>
            <label for="grade">Nota no ${i}° período</label>
            <input type="number" id="grade${i}">
            <label for="frequency">Frequencia no ${i}° período</label>
            <input type="number" id="frequency${i}">
        </div>`;
    }

    addInput();

    document.getElementById("gradesAndFrequencies").style.display = "flex";

    num = number;
  };

  const calculate = () => {
    let sum = 0;
    let freq = 0;
    for (let i = 1; i <= num; i++) {
      const grade = document.getElementById(`grade${i}`).value;
      if (grade.trim() == "" || grade < 1 || grade > 10) {
        alert(`DIGITE UM VALOR VÁLIDO PARA A NOTA DO ${i}° PERÍODO`);
        return;
      }
      const frequency = document.getElementById(`frequency${i}`).value;
      if (frequency.trim() == "" || frequency < 1 || frequency > 100) {
        alert(`DIGITE UM VALOR VÁLIDO PARA A FREQUÊNCIA DO ${i}° PERÍODO`);
        return;
      }
      sum += grade;
      freq += frequency;
    }
    if (sum / num < 7) {
      document.getElementById("gradesAndFrequencies").innerHTML = "";
      document.getElementById("reproved").style.display = "flex";
      document.getElementById("reason").innerHTML = "NOTAS BAIXAS";
      return;
    }

    if (freq / num < 75) {
      document.getElementById("gradesAndFrequencies").innerHTML = "";
      document.getElementById("reproved").style.display = "flex";
      document.getElementById("reason").innerHTML = "EXCESSO DE FALTAS";
      return;
    }

    document.getElementById("gradesAndFrequencies").innerHTML = "";
    document.getElementById("aproved").style.display = "flex";
    return;
  };

  function back() {
    num = 0;
    document.getElementById("numberOfPeriods").value = "";
    document.getElementById("periods").style.display = "flex";
    document.getElementById("reproved").style.display = "none";
    document.getElementById("aproved").style.display = "none";
  }

  return (
    <>
      <h1>NSA</h1>
      <div id="all">
        <div id="periods">
          <label>QUANTIDADE DE PERÍODOS</label>
          <input type="number" id="numberOfPeriods" />
          <input
            type="submit"
            value="COMEÇAR VERIFICAÇÃO"
            onClick={periodsNumber}
          />
        </div>
        <div id="gradesAndFrequencies"></div>
        <div id="aproved">
          <h2>ALUNO APROVADO COM SUCESSO</h2>
          <button onClick={back}>REALIZAR OUTRA VERIFICAÇÃO</button>
        </div>
        <div id="reproved">
          <h2>ALUNO REPROVADO</h2>
          <p>
            motivo de: <strong id="reason"></strong>
          </p>
          <button onClick={back}>REALIZAR OUTRA VERIFICAÇÃO</button>
        </div>
      </div>
    </>
  );
}

export default App;
