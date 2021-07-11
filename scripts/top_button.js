window.onscroll = (event) => {
    scrollFunction();
}

var mybutton = document.getElementById("topButton");

function scrollFunction() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}