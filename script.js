// (use strict)

// server

// const http = require('http')
// const server = http.createServer(function (req, res) {
//     console.log(req);
// })
// const port = 5501;
// server.listen(port, function () {
//     console.log("server running on " + port);
// })


// let header = document.getElementById('navbar');
// let oldColor = navbar.style.backgroundColor;

// document.body.addEventListener('scroll', () => {
//   let yPosition = document.body.scrollTop;
//   if (yPosition > 100) {
//     navbar.style.backgroundColor = "teal";
//   }
//   else {
//     navbar.style.backgroundColor = oldColor;
//   }
// })



$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script



  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // scroll bar
  let preogressbar = document.getElementById("preogressbar")
  let percent = document.getElementById("percent")

  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    letprogress = (window.pageYOffset / totalHeight) * 100;
    preogressbar.style.height = progress + "%";
    percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
  }

  // typing text animation script
  let typing = new Typed(".typing", {
    strings: ["Front End Developer", "Junior", "Front End Developer",],
    typeSpeed: 100,
    backSpeed: 80,
    i: 0



  });


  var typed = new Typed(".typing-2", {
    strings: ["Front End Developer",],
    typeSpeed: 100,
    backSpeed: 60,

  });

  var typed = new Typed(".typing-3", {
    strings: ["Connect with me on :)"],
    typeSpeed: 100,
    backSpeed: 60,

  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});


// form validation

const formE1 = document.getElementById('formElement');

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = {};
})


// username
const usernameValue = document.getElementById("usernameField").value;

if (usernameValue == "") {
  errors.username = "Username Field can not be empty";
}


// useremail
const emailValue = document.getElementById("emailField").value;

if (emailValue == "") {
  errors.email = "email Field can not be empty";
}

// subject
const subjectField = document.getElementById("subjectField").value;


if (subjectField == "") {
  errors.password = "subject field can not be empty";
}



// radio
let gender = false;

this.querySelectorAll('[name="gender"]').forEach((item) => {
  if (item.checked) {
    gender = true;
  }
});

if (!gender) {
  errors.gender = "Please select your gender";
}

// message
const MessageFilde = document.getElementById("MessageFilde").checked;
if (!checkBox) {
  errors.check = "You must Message our terms and conditions";
}

console.log(errors);

// submit

formElement.addEventListener('submit', event => {
  event.preventDefault();
  validateAllFormGroups(formElement);
})
// validateForm('#registrationForm');


// cookies
const getCookie = (name) => {
  const value = " " + document.cookie;
  console.log("value", `==${value}==`);
  const parts = value.split(" " + name + "=");
  return parts.length < 2 ? undefined : parts.pop().split(";").shift();
};

const setCookie = function (name, value, expiryDays, domain, path, secure) {
  const exdate = new Date();
  exdate.setHours(
    exdate.getHours() +
    (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
  );
  document.cookie =
    name +
    "=" +
    value +
    ";expires=" +
    exdate.toUTCString() +
    ";path=" +
    (path || "/") +
    (domain ? ";domain=" + domain : "") +
    (secure ? ";secure" : "");
};

// npm
axios.get('http://localhost:3000/posts')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


  // export import ვიცი)







