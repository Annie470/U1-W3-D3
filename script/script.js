//recupero il form
const form = document.querySelector("form");
//agisco sull evento del form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //recupero input
  const input = document.getElementById("textInput");
  //recuper il contenuto dell'input
  const daFare = input.value;
  // creo un li
  const li = document.createElement("li");
  //creo un p
  const p = document.createElement("p");
  p.textContent = daFare;
  li.appendChild(p);
  //recupero contenitore di li
  const assegnate = document.getElementById("coseDaFare");
  //appendo li al padre
  assegnate.appendChild(li);
  form.reset();

  //bisogna sbarrare li p al click
  //trovo li p
  p.addEventListener("click", () => {
    p.style.textDecoration = "line-through";
  });
  //creo bottone per liminare li
  const btn = document.createElement("button");
  btn.textContent = "X";
  li.appendChild(btn);
  btn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});
