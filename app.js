const cpnBtn = document.getElementById('cpnBtn');
const cpnCode = document.getElementById('cpnCode');

cpnBtn.onclick = function() {
  navigator.clipboard.writeText(cpnCode.innerHTML);
  cpnBtn.innerHTML = 'COPIED';
  setTimeout(function(){
    cpnBtn.innerHTML = 'COPY CODE';
  }, 3000);
}