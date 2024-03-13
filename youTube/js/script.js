const signUp = document.querySelector(".signUp-form");
const signUpBtn = signUp.querySelectorAll("INPUT");
const loginForm = document.querySelector(".login-form");
const loginBtn = loginForm.querySelectorAll("INPUT");
const closeBtn = document.querySelectorAll(".btn-close");
const menuItems = document.querySelector(".menu-items");
console.log(menuItems);

let registerData = [];

if (localStorage.getItem("registerData") != null) {
registerData = JSON.parse(localStorage.getItem("registerData"));
}
signUp.onsubmit = (e) => {
e.preventDefault();
let checkEmail = registerData.find(
(data) => data.email == signUpBtn[1].value
);
if (checkEmail == undefined) {
registerData.push({
  name: signUpBtn[0].value,
  email: signUpBtn[1].value,
  mobile: signUpBtn[2].value,
  password: signUpBtn[3].value,
});

localStorage.setItem("registerData", JSON.stringify(registerData));
swal("registered", "Successfully", "success");
closeBtn[0].click();
} else {
swal("Already registered", "please login", "warning");
}
};

loginForm.onsubmit = (e) => {
e.preventDefault();
const email = registerData.find((data) => data.email == loginBtn[0].value);
if (email != undefined) {
if (email.password === loginBtn[1].value) {
  localStorage.setItem("loginInfo", JSON.stringify(email));
  closeBtn[1].click();
  checkLogIn();
} else {
  swal("wrong password", "check password", "warning");
}
} else {
swal("wrong", "please check again", "warning");
}
};

const checkLogIn = () => {
if (localStorage.getItem("loginInfo") !== null) {
const userInfo = JSON.parse(localStorage.getItem("loginInfo"));
menuItems.innerHTML = `

<a
class="dropdown-item"
href="#"
>${userInfo.name}</a
>
<a
class="dropdown-item"
href="#"
>logOut</a
>
`;
} else {
menuItems.innerHTML = `
<a
class="dropdown-item"
data-bs-toggle="modal"
data-bs-target="#signUp-modal"
href="#"
>signUp</a
>
<a
class="dropdown-item"
data-bs-toggle="modal"
data-bs-target="#LogIn-modal"
href="#"
>LogIn</a
>`;
}
};

checkLogIn();
