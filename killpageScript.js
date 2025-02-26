
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let myVideos = [
    'video/fragGraph0.mp4',
    'video/fragGraph1.mp4',
    'video/fragGraph2.mp4',
    'video/fragGraph3.mp4',
    'video/fragGraph4.mp4',
    'video/fragGraph5.mp4',
    'video/fragGraph6.mp4',
    'video/fragGraph7.mp4',
    'video/fragGraph8.mp4',
    'video/fragGraph9.mp4',
    'video/fragGraph10.mp4'
]


function switchSplit(myIndex, textContent){
    document.getElementById("curSplit").textContent = textContent;
    document.querySelector("video").src = myVideos[myIndex]

}

let myVideos2 = [
  'video/participationGraph0.mp4',
  'video/participationGraph1.mp4',
  'video/participationGraph2.mp4',
  'video/participationGraph3.mp4',
  'video/participationGraph4.mp4',
  'video/participationGraph5.mp4',
  'video/participationGraph6.mp4',
  'video/participationGraph7.mp4',
  'video/participationGraph8.mp4',
  'video/participationGraph9.mp4',
  'video/participationGraph10.mp4'
]


function switchSplit2(myIndex, textContent){
  document.getElementById("curSplit").textContent = textContent;
  document.querySelector("video").src = myVideos2[myIndex]

}