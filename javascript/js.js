document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menuContent = document.getElementById("menu-content");
  const activeImage = document.getElementById("active-image");
  const activeImage2 = document.getElementById("active-image2");
  const activeImage3 = document.getElementById("active-image3");

  menuIcon.addEventListener("click", function () {
    menuContent.classList.toggle("d-none");
    activeImage.classList.toggle("sm-d-none");
    activeImage2.classList.toggle("sm-d-none");
    activeImage3.classList.toggle("sm-d-none");
  });
});

let stop = document.getElementById('stop');
let stop1 = document.getElementById('stop1');
let stop2 = document.getElementById('stop2');
stop.onclick = function(e){
  return false;
}
stop1.onclick = function(e){
  return false;
}
stop2.onclick = function(e){
  return false;
}

AOS.init({
  
})



