// console.log(data);
let data = localStorage.getItem("resep");
let master;

if (data) {
  master = JSON.parse(data);
}

function removeElementLi() {
  let listBahan = document.getElementById("bahan");
  let lenBahan = document.querySelectorAll(".listBahan").length;
  let listCara = document.getElementById("cara");
  let lenCara = document.querySelectorAll(".listCara").length;

  if (lenBahan < 1 || lenCara < 1) {
    return;
  }
  for (let i = 0; i < lenBahan; i++) {
    listBahan.removeChild(listBahan.firstElementChild);
  }
  for (let i = 0; i < lenCara; i++) {
    listCara.removeChild(listCara.firstElementChild);
  }
}

function generateNama(data, number) {
  let randomMenu = data[number];
  let namaResep = randomMenu.nama;

  const judulResep = document.querySelector(".nama-resep");
  // console.log(judulResep);
  judulResep.textContent = namaResep;
  return namaResep;
}

function generateBahan(data, number) {
  let randomMenu = data[number];
  const listResep = randomMenu.bahan;
  for (let i = 0; i < listResep.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(listResep[i]);
    li.appendChild(text);
    li.classList.add("listBahan");
    document.getElementById("bahan").appendChild(li);
  }
}

function generateCaraMasak(data, number) {
  let randomMenu = data[number];
  const listResep = randomMenu.langkah;
  for (let i = 0; i < listResep.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(listResep[i]);
    li.appendChild(text);
    li.classList.add("listCara");
    document.getElementById("cara").appendChild(li);
  }
}

function updateHistory(array, input) {
  // console.log(array);
  if (array.length === 3) {
    array.shift();
    array.push(input)
  } else{
    array.push(input)
  }
}

function historyToHTML() {
  
  let rawData = localStorage.getItem("historiRandom");
  let data = JSON.parse(rawData);
  // console.log(data);

  let listHistori = document.getElementById("history");
  let lenHistori = document.querySelectorAll(".listHistory").length;
  // console.log(lenHistori);

  for (let i = 0; i < lenHistori; i++) {
    listHistori.removeChild(listHistori.firstElementChild);
  }

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(data[i]);
    li.appendChild(text);
    li.classList.add("listHistory");
    document.getElementById("history").appendChild(li);
  }
}

function removeHistory() {
  let listHistori = document.getElementById("history");
  let lenHistori = document.querySelectorAll(".listHistory").length;
  // console.log(lenHistori);

  for (let i = 0; i < lenHistori; i++) {
    listHistori.removeChild(listHistori.firstElementChild);
  }
  localStorage.removeItem("historiRandom");
}

let array = [];
let lastIndex = -1;
function mainFunction() {
  do {
    temp = Math.floor(Math.random() * master.length);
  } while (temp === lastIndex);
  lastIndex = temp;
  removeElementLi();
  let nama = generateNama(master, temp);
  generateBahan(master, temp);
  generateCaraMasak(master, temp);
  let test = updateHistory(array, nama);
  localStorage.setItem("historiRandom", JSON.stringify(array))
  console.log(array);
  historyToHTML();
}

// console.log(histori);
// localStorage.setItem("history", JSON.stringify(histori))
const randomBtn = document
  .getElementById("random-btn")
  .addEventListener("click", mainFunction);
const removeBtn = document
  .getElementById("remove-btn")
  .addEventListener("click", removeHistory);

mainFunction();
