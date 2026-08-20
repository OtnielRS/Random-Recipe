let rawData = localStorage.getItem("resep");
let data = JSON.parse(rawData);

// ------------ global Data -----------//

let array = [];
let angkaNext = -1;

// -------------- Fungsi Random -------------//

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
  // console.log(judulResep);
  judulResep.textContent = namaResep;
  console.log(namaResep);
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
    array.push(input);
  } else {
    array.push(input);
  }
}

function historyToHTML(array) {
  let data = array;
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

function generateNumber(number) {
  let temp = Math.floor(Math.random() * data.length);
  if (number === temp) {
    temp = Math.floor(Math.random() * data.length);
    angkaNext = temp;
  }
  return temp;
}

function sambutan() {
  let nama = localStorage.getItem("userNama");
  let target = document.getElementById("entry");
  target.innerHTML = `Halo ${nama}, Selamat datang di program "Random Recipe"`;
}

function resetVideo() {
  let target = document.getElementById("iFrameVideo")
  target.innerHTML = ''
}

function addVideo(data, number) {
  resetVideo()
 
  const temp = document.getElementById("iFrameVideo");

  const iframe = document.createElement('iframe')


  let linkVideo = data[number].embed
  iframe.src = linkVideo; 
  iframe.width = "560";
  iframe.height = "315";
  iframe.title = "Youtube video player"; 
  iframe.style.border = "none"; 
  iframe.referrerPolicy = "strict-origin-when-cross-origin"

  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  );
  iframe.setAttribute("allowfullscreen", "true");

  temp.appendChild(iframe);
}

function mainFunction() {
  // console.log("Hello World");
  let randomNum = generateNumber(angkaNext);
  let namaResep = generateNama(data, randomNum);
  let lastHistory = namaResep;
  if (namaResep === lastHistory) {
    randomNum = generateNumber(angkaNext);
    namaResep = generateNama(data, randomNum);
  }
  removeElementLi();
  generateBahan(data, randomNum);
  generateCaraMasak(data, randomNum);
  updateHistory(array, namaResep);
  historyToHTML(array);
  addVideo(data, randomNum)
}



const randomBtn = document
  .getElementById("random-btn")
  .addEventListener("click", mainFunction);
const removeBtn = document
  .getElementById("remove-btn")
  .addEventListener("click", removeHistory);
const logOutBtn = document.getElementById("logout");

logOutBtn.addEventListener("click", (e) => {
  e.defaultPrevented;
  window.location.href = "index.html";
  localStorage.clear();
});

localStorage.setItem("historiRandom", JSON.stringify(array));
sambutan();
