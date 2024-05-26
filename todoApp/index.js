const taskInput= document.getElementById("input");
const taskForm= document.getElementById("task-form");
const tasklist= document.getElementById("list");

taskForm.addEventListener('submit',(e)=> {

    e.preventDefault();
    const taskTitle=taskInput.value;
    console.log(taskTitle);

    if(taskTitle==""){
        alert("write task");
    }
    else{
        const listItem= document.createElement('li');
        listItem.innerHTML=taskTitle;
        tasklist.append(listItem);

        let span = document.createElement('span');
        span.innerHTML = `&times;`;
        listItem.appendChild(span);
        taskInput.value="";
        saveListData();
    }

} );


// isme item ko mark done krne k liye 
tasklist.addEventListener('click', (e) => {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveListData();
    }

    // isme delte krna ho tb 
    if(e.target.tagName=="SPAN"){
        const li = e.target.parentElement;
        li.remove();
        saveListData();
    }

});

// list data ko show krna bhi h 
function showListData(){
    tasklist.innerHTML= localStorage.getItem('listItem');
}

// this function use for local storage jb apn refresh krte h tb sb delete ho jata tha to vo na ho uske liye ye liya h 
function saveListData(){
    localStorage.setItem('listItem', tasklist.innerHTML);
}

showListData();