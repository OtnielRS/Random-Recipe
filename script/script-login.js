
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
  // Ambil value teks dari input
  let namaUser = getName();
  let emailUser = getEmail();

  // Validasi sederhana agar data kosong tidak tersimpan
  if (namaUser === "" || emailUser === "") {
    alert("Nama dan Email harus diisi!");
    return false;
  }

  if (listID.length === 0) {
    listID++
    listNama.push(namaUser); 
    listEmail.push(emailUser); 
  } else {
    listID++
    listNama.push(namaUser)
    listEmail.push(emailUser)
  }

  // Contoh jika Anda ingin menyimpan data user baru ke localStorage
  localStorage.setItem("ID", listID)
  localStorage.setItem("userNama", namaUser);
  localStorage.setItem("userEmail", emailUser);

  return true;
}


let submitBtn = document.getElementsByClassName("submit")[0];
console.log(submitBtn.innerHTML);

submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah form reload halaman

  // Jalankan fungsi getDetail saat tombol diklik
  let isFormValid = getDetail();

  // Jika data valid, pindah ke halaman baru
  if (isFormValid) {
    window.location.href = "random resep.html";
  }
});
