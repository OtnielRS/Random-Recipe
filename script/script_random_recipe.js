
// console.log(data);
let data = localStorage.getItem("resep");
let master;


if(data) {
    master = JSON.parse(data)
}

function removeElementLi() {
    let listBahan = document.getElementById("bahan")
    let lenBahan = document.querySelectorAll(".listBahan").length
    let listCara = document.getElementById("cara")
    let lenCara = document.querySelectorAll(".listCara").length

    if (lenBahan < 1 || lenCara < 1) {
        return
    }
    for (let i = 0; i < lenBahan; i++) {
        listBahan.removeChild(listBahan.firstElementChild)
    }
    for (let i = 0; i < lenCara; i++) {
        listCara.removeChild(listCara.firstElementChild)
    }
}

function generateNama(data, number) {
    let randomMenu = data[number]
    let namaResep = randomMenu.nama
    
    
    const judulResep = document.querySelector(".nama-resep");
    // console.log(judulResep);
    judulResep.textContent = namaResep
    histori.push(namaResep)
}

function generateBahan (data, number) {
    let randomMenu = data[number]
    const listResep = randomMenu.bahan;
    for (let i = 0; i < listResep.length; i++) {
        let li = document.createElement("li");
        let text = document.createTextNode(listResep[i])
        li.appendChild(text)
        li.classList.add("listBahan")
        document.getElementById("bahan").appendChild(li)
    }
}

function generateCaraMasak(data, number) {
    let randomMenu = data[number]
    const listResep = randomMenu.langkah;
    for (let i = 0; i < listResep.length; i++) {
        let li = document.createElement("li")
        let text = document.createTextNode(listResep[i])
        li.appendChild(text)
        li.classList.add("listCara")
        document.getElementById("cara").appendChild(li)
    }
}

function generateHistory(data, number) {
    let randomMenu = data[number];
    let namaResep = randomMenu.nama
    
    let li = document.createElement("li")
    let text = document.createTextNode(namaResep)
    li.appendChild(text)
    li.classList.add("listHistory")
    document.getElementById("history").appendChild(li)
    localStorage.setItem("histori", JSON.stringify(histori))
}
let histori = []

function mainFunction(number) {
    const randomNum = (Math.floor(Math.random() * master.length))
    removeElementLi();
    let nama = generateNama(master, randomNum);
    generateBahan(master, randomNum);
    generateCaraMasak(master, randomNum);
    generateHistory(histori, randomNum);
    let temp = randomNum
}

function removeHistory(){
    let listHistori = document.getElementById("history")
    let lenHistori = document.querySelectorAll(".listHistory").length

    for (let i = 0; i < lenHistori; i++) {
        listHistori.removeChild(listHistori.firstElementChild)
    }
    localStorage.removeItem("histori")
}


const randomBtn = document.getElementById("random-btn").addEventListener("click", mainFunction)
const removeBtn = document.getElementById("remove-btn").addEventListener("click", removeHistory)


mainFunction();
