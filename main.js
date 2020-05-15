const viewWorkBtn = document.getElementById("#view-work");

viewWorkBtn = document.addEventListener('click', scrollDown());

function scrollDown() {
  window.scrollTo({
    bottom: 0,
    behavior: "smooth"
  })
}


let header = 300;


function scrollUp() {
  if (window.pageYOffset >= header) {
    document.querySelector('#arrow').classList.add('arrow-fadeIn');
    document.querySelector('#arrow').classList.remove('arrow-fadeOut');
  }
  else{
    document.querySelector('#arrow').classList.add('arrow-fadeOut');
    document.querySelector('#arrow').classList.remove('arrow-fadeIn');
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

document.getElementById("arrow").addEventListener("click",function(){
  scrollToTop();
});

document.addEventListener('scroll', function (){
  scrollUp();
});