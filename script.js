const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value.trim()===''){
        alert("You Must Write Something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
document.getElementById("add-button").addEventListener("click", addTask);
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.style.display = 'none';
        saveData();
    }
},false);

document.getElementById("light-theme-button").addEventListener("click", function() {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
});

document.getElementById("dark-theme-button").addEventListener("click", function() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
});

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
loadData();