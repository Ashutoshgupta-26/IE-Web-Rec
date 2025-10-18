let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let historyPanel = document.getElementById("historyPanel");
let history = [];

function addToDisplay(value) {
  if (display.innerText === "0" || display.innerText === "Error") display.innerText = "";
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = "0";
}

function toggleSign() {
  let exp = display.innerText;
  if (exp === "0" || exp === "") return;

  // Find the last number in the expression
  let match = exp.match(/(-?\d+(\.\d+)?)$/);
  if (match) {
    let num = parseFloat(match[0]);
    let toggled = num * -1;
    display.innerText = exp.slice(0, match.index) + toggled;
  }
}

function calculate() {
  try {
    let expression = display.innerText.replace(/÷/g, "/").replace(/×/g, "*");
    let result = eval(expression);

    if (isNaN(result) || result === Infinity) throw "Error";

    // Round result to 3 decimal places (remove trailing zeros)
    result = parseFloat(result.toFixed(3));

    addToHistory(expression, result);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

function addToHistory(expression, result) {
  let entry = `${expression} = ${result}`;
  history.unshift(entry);
  localStorage.setItem("calcHistory", JSON.stringify(history));
  updateHistoryUI();
}

function updateHistoryUI() {
  historyList.innerHTML = "";
  history.forEach(item => {
    let div = document.createElement("div");
    div.className = "history-item";
    div.innerText = item;
    div.onclick = () => {
      display.innerText = item.split("=")[0].trim();
    };
    historyList.appendChild(div);
  });
}

function toggleHistory() {
  historyPanel.classList.toggle("active");
}

function clearHistory() {
  history = [];
  localStorage.removeItem("calcHistory");
  updateHistoryUI();
}

window.onload = () => {
  let saved = localStorage.getItem("calcHistory");
  if (saved) {
    history = JSON.parse(saved);
    updateHistoryUI();
  }
};
