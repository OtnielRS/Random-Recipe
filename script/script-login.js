
// ----------- Global Data ----------//

let listID = 0
let listNama = [];
let listEmail = [];
let listHistory = []

// ------------ fungsi login -----------// 
function getName() { 
    let nama = document.getElementById("nama").value; 
    return nama; 
} 

function getEmail() { 
    let email = document.getElementById("email").value; 
    return email; 
} 

function getDetail() {
  let namaUser = getName();
  let emailUser = getEmail();

  if (namaUser === "" || emailUser === "") {
    alert("Nama dan Email harus diisi!");
    return false;
  }

  if (listID.length === 0) {
    listNama.push(namaUser); 
    listEmail.push(emailUser); 
  } 

  localStorage.setItem("userNama", namaUser);
  localStorage.setItem("userEmail", emailUser);

  return true;
}


let submitBtn = document.getElementsByClassName("submit")[0];
console.log(submitBtn.innerHTML);

submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); 

  let isFormValid = getDetail();

  if (isFormValid) {
    window.location.href = "random resep.html";
  }
});
