console.log('hima');

let hide_sho = document.getElementById('hidn');
let clos = document.getElementById('close');
let View = document.getElementById('View');

View.onclick = function abc(){
    hide_sho.style.display = "block";
};

clos.onclick = function abc(){
    hide_sho.style.display = "none";
};

const showsing = document.getElementById('showsing');
const closse = document.getElementById('closs');
const sing = document.getElementById('sing');

sing.onclick = function(){
    showsing.style.display = "block";
};

closse.onclick = function(){
    showsing.style.display = "none";
};