const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
document.getElementById("input-box").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addtask();
    }
        });
//addEventListener("click",onclick,false);
function addtask()
{
    if(inputbox.value == '')
    {
        alert("Your Task has not montioned.....!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

        //let editButton = document.createElement("button");
        let editImage = document.createElement("img");
        editImage.src = "edit2.png"; 
        //editButton.onclick=
        li.appendChild(editImage);
        //li.appendChild(editButton);

        let span = document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
listcontainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="IMG")
    {
       let parentLi = e.target.parentElement;
        let text = parentLi.firstChild.textContent;

        
        parentLi.innerHTML = '';

        
        let inputField = document.createElement("input");
        inputField.value = text;
        parentLi.appendChild(inputField);

        
        //let saveButton = document.createElement("button");
        let saveImage = document.createElement("img");
        saveImage.src = "save.png"; // URL of the save image
        //saveButton.appendChild(saveImage);
        parentLi.appendChild(saveImage);
        //span.innerHTML='\u00d7';

        
        saveImage.addEventListener("click", function () {
            let newText = inputField.value;
            parentLi.innerHTML = newText;

            //let editButton = document.createElement("button");
            //editButton.innerHTML='&#xf303;'
            //editButton.classList.add('fas' , 'fa-edit');
            let editimg=document.createElement('img');
            editimg.src="edit2.png";
            //editButton.appendChild(editimg);
            parentLi.appendChild(editimg);

            let span = document.createElement("span");
            span.innerHTML = '\u00d7';
            parentLi.appendChild(span);

            savedata();
        });
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
} , false);
function savedata()
{
    loacalstorage.setItem("data",listcontainer.innerHTML);

}
function showTask()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();