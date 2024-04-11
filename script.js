const inputBox=document.getElementById("input-box");
const descriptionBox = document.getElementById("description-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        if (descriptionBox.value !== '') { // Check if description is provided
            let description = document.createElement("p");
            description.textContent = descriptionBox.value; // Create a paragraph element for description
            li.appendChild(description);
        }
        listContainer.appendChild(li);
    }
    inputBox.value="";
    descriptionBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();