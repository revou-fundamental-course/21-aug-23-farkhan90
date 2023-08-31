let introName = prompt("Siapakah Nama Anda?", "");
document.getElementById('banner-name').innerHTML = introName;

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

var myNav = document.querySelector('.navbar');

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll")
  }
};

function validationForm(){
  const formName = document.forms['form-message']['nama'].value;
  const dateOfBirth = new Date(document.forms['form-message']['tgl_lahir'].value);
  const birthToString = document.forms['form-message']['tgl_lahir'].value;
  let currentDate = new Date();
  const kelaminRadio = document.querySelector('input[name="jk"]:checked');
  const pesan = document.forms['form-message']['pesan'].value;

  if (formName == ""){
      alert("Nama tidak boleh kosong!");
      document.getElementById('nama').focus();
      return false;
  } else if (birthToString == ""){
      alert("Tanggal Lahir tidak boleh kosong!");
      document.getElementById('tgl_lahir').focus();
      return false;
  } else if(dateOfBirth.setHours(0, 0, 0, 0) > currentDate.setHours(0, 0, 0, 0)){
      alert("Tanggal Lahir tidak boleh lebih dari tanggal sekarang!");
      document.getElementById('tgl_lahir').focus();
      return false;
  } else if (kelaminRadio == null){
      alert("Jenis kelamin tidak boleh kosong!");
      return false;
  } else if (pesan == ""){
      alert("Pesan tidak boleh kosong!");
      document.getElementById('pesan').focus();
      return false;
  }
  else{
      document.getElementById('output-nama').innerHTML = formName;
      currentDate = new Date();
      document.getElementById('current').innerHTML = currentDate;
      document.getElementById('output-tgl_lahir').innerHTML = birthToString;
      const kelamin = kelaminRadio.value;
      document.getElementById('output-jenis_kelamin').innerHTML = kelamin;
      document.getElementById('output-pesan').innerHTML = pesan;
      return false;
  }
}