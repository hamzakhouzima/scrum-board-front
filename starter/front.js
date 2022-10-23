var tasks=[];



// ADD USER INPUTS INTO AN  ARRAY OF OBJECTS 

function addInputs(){
  let form = document.querySelector("#modalForm");
 
    form.addEventListener('submit', (e) => {

      // to stop reload fo page
    
      
 
    // select the input elements from the html code one by one 

    let title = document.getElementById('title-block');
    let preority = document.getElementById('preority-block');
    let date=document.getElementById('date-block');
    let status=document.getElementById('status-block');
    let description = document.getElementById('w3review');
    let preority_select = preority.options[preority.selectedIndex].text;
    let task_type = status.options[status.selectedIndex].value; 
    

    // check which of  the radio boxes  was selected 
if(bug.checked){
 checked="bug";
 }
else if(feature.checked){
  checked="feature";
}

// affect the html input values to  task{dom selected values} array 
let task =  {
    title         :  title.value ,
    checked       :  checked,
    date          :  date.value,
    description   :  description.value,
    task_type     :  task_type,
    preority_select 

}
       tasks.push(task); // push the "task" object into tasks array
       console.log(tasks) // display "tasks" in console  just for test
       displayInputs(); // displayInputs() function is called , to display the previous data on the browser page , the display function is defined in the line 56
       document.getElementById("myform").reset(); // To reset the modal from any inputs 
       e.preventDefault(); // prevent a default function in submit button which is refresh the page 
})

}

//DISPLAY THE PREVIOUS INPUTS IN BROWSER PAGE USING AN INJECTED  HTML CODE  

function displayInputs(){
  let task_status=""; // variable to affect a button html code 
// empty the html page from the task types 
  document.getElementById("to-do").innerHTML = "";
  document.getElementById("doing").innerHTML = "";
  document.getElementById("done-tasks").innerHTML = "";

//for to loop on every object in the array Tasks .The index variable will be used as identification of each object  
for (let index = 0; index < tasks.length; index++) {
  // condition to find out the task type and select the html element where i'll display it 
    if(tasks[index].task_type =="to-do"){ 
        task_status=document.getElementById("to-do");
    }else if(tasks[index].task_type =="doing"){
        task_status=document.getElementById("doing");
    }else if(tasks[index].task_type =="done"){
        task_status=document.getElementById("done-tasks");
    }
   // HTML code injection 
     task_status.innerHTML += `
     <button class="btn d-flex p-0 w-100 border-bottom"> 
        <div class="start p-2">
          <i class="bi bi-question-circle  text-success fs-2 "></i> 
        </div>
        <div class="text-start">
          <div class="fw-bolder" id="zaa">${tasks[index].title}</div>
          <div class="start-10">
            <div class="fw-light">#${index+1} created in ${tasks[index].date}</div>
            <div class="fw-bold" title="">${tasks[index].description}</div>
          </div>
          <div class="">
            <span class="badge bg-primary">${tasks[index].preority_select}</span>
            <span class="badge bg-secondary">${tasks[index].checked}</span>
            <button class="btn btn-danger btn-sm rounded-0 border-bottom" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onclick="deleteTask(${index})"><i class="fa fa-trash"></i></button>
            <button class="btn btn-success btn-sm rounded-0 border-bottom" type="button" data-bs-toggle="modal" data-bs-target="#modalForm" title="Edit" onclick="editTask(${index})"><i class="fa fa-edit"></i></button>
          </div>
        
      </button>`;
             
}

 }
   
// DELETE FUNCTION 
function deleteTask(index){

  tasks.splice(index,1);

  displayInputs()



}

function editTask(index){
  // bring the values of the clicked task index from the array 
    title=tasks[index].title;
    checked=tasks[index].checked;
    date=tasks[index].date;
    description=tasks[index].description;
    preority_select=tasks[index].preority_select;
    task_type =tasks[index].task_type; 
    
// 
    let form=document.forms["edit"];
    form.username.value=title;
    form.preority_select.value=preority_select;
    form.date.value=date;
    form.w3review.value=description;
    form.task_type.value= task_type;

    tasks[index] =form;


displayInputs()
   
 }



  

 addInputs()
 //displayInputs()




















