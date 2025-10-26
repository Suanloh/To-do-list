const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value.trim() === ''){
        alert("You must write something");
    
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //delete
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        //edit
        let editBtn= document.createElement("button");
        editBtn.innerHTML= "\u002B";
        editBtn.classList.add("editBtn");
        editBtn.onclick = () => editTask(li); // to the edit function
        li.appendChild(editBtn);
    }
    inputBox.value="";
    saveData();
}

 listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 },false);

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }
 function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
 }
 showTask();

//  startchange here
 function editTask(li){
    const currentText= li.firstChild.textContent;
    const newText= prompt("Edit yout task: ", currentText);
    if(newText && newText.trim()!== ""){
        li.firstChild.textContent= newText;
        saveData();
    }
 }
 
