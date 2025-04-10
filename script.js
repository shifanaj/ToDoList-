const inputBox=document.getElementById("inputbox");
const listbox=document.getElementById("list");

function addTask(){
    if(inputBox.value.trim() === ''){
        alert("Enter some task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;//stroing the inpuy in the variable
        listbox.appendChild(li);//to add element in the list
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listbox.addEventListener("click" ,function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data" ,listbox.innerHTML);

}
function display(){
    listbox.innerHTML=localStorage.getItem("data");

}
display()