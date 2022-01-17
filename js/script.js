let form_login = document.querySelector('.login-account');
let closeLogin = document.querySelector('.icon-btn');
let login = document.querySelector('.login');

closeLogin.onclick = () => {
    form_login.classList.add('active')
} 

login.onclick = () =>{
    form_login.classList.remove('active')

}


// Login
var CORRECT_USER = "YG17";
var CORRECT_PASS = "1711";

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if(formLogin.attachEvent){
    formLogin.attachEvent('submit', onFormSubmit);
}else{
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    var username = inputUsername.value;
    var password = inputPassword.value;

    if(username == CORRECT_USER && password == CORRECT_PASS){
        alert('Thành công =))');
        form_login.classList.add('active');
        e.preventDefault();
    }else{
        alert('Thất bại !')
    }
}


// quick view model-list
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewContainer.querySelector('.close-list').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
    close.classList.remove('active');
 });
};


