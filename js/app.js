
function getDateTime() {
  document.getElementById('demo').innerHTML = Date();
};

var mybutton = document.getElementById("myBtn");
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > (window.innerHeight / 2) || document.documentElement.scrollTop > (window.innerHeight / 2)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

