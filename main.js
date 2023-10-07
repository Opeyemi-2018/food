let mainCon = document.querySelector(".main-con");
let getStarted = document.querySelector(".get-started");
let cancelBtn = document.querySelector(".fa-times");
let loginCon = document.querySelector(".login-con");
let get = document.getElementById("get");

getStarted.addEventListener("click", showLoginBox);

function showLoginBox() {
  mainCon.classList.add("active");
  loginCon.classList.remove("logActive");
}

cancelBtn.addEventListener("click", () => {
  mainCon.classList.remove("active");
  loginCon.classList.add("logActive");
});

get.addEventListener("click", () => {
  showLoginBox();
});

// js for question and answer
let questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  let btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

//JS FOR TESTIMONIAL DISPLAY
let testimonialCon = document.querySelector(".testimonial-con");
let userText = document.querySelectorAll(".user-text");
let pics = document.querySelectorAll(".pic");

testimonialCon.addEventListener("click", (e) => {
  let ourId = e.target.dataset.id;
  if (ourId) {
    pics.forEach((pic) => {
      pic.classList.remove("active-pic");
    });
    e.target.classList.add("active-pic");
    userText.forEach((text) => {
      text.classList.remove("active-text");
    });
    let element = document.getElementById(ourId);
    element.classList.add("active-text");
  }
});

//js for login in
let loginDetails = {
  number: 12345,
  password: "john12345",
};
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let numberEl = document.getElementById("number").value;
  let passwordEl = document.getElementById("password").value;

  if (numberEl == loginDetails.number && passwordEl == loginDetails.password) {
    location.href = "menu.html";
  } else {
    alert("invalid details");
  }
});
