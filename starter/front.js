



var tasks=[];

function addInputs(){
   let form = document.querySelector("#modalForm");
    form.addEventListener('submit', (e) => {

      // to stop reload fo page
      e.preventDefault();

    let title = document.getElementById('ttitle');
    let preority = document.getElementById('preo');
    let date=document.getElementById('date');

    let preor = preority.options[preority.selectedIndex].text;
    // let type = document.querySelector('input[name="type"]:checked').value;

    let sstatus=document.getElementById('status');
    let todo = sstatus.options[sstatus.selectedIndex].text;
    let description = document.getElementById('w3review');
    
  
  if(bug.checked){
 checked="bug";
 }
else if(feature.checked){
  checked="feature";
}

let task =  {
      
            title         :  title.value ,
            checked         :  checked,
            date          :  date.value,
            description   :  description.value,
            todo,
            preor

            
      }
       tasks.push(task);
      const onConfirmRefresh = function (event) {
        event.preventDefault();
      }
       console.log(tasks);
     
      }) 

      }




function displayInputs(title){

var htmloutput = ` <button class="btn d-flex p-0  border-bottom" >
<div class="start p-2">
    <i class="bi bi-question-circle  text-success fs-2 "></i> 
</div>
<div class="text-start">
    <div class="fw-bolder" id="zaa">${title}</div>
    <div class="start-10">
        <div class="fw-light">#1 created in 2022-10-08</div>
        <div class="fw-bold" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">There is hardly anything more frustrating than having t...</div>
    </div>
    <div class="">
        <span class="badge bg-primary">High</span>
        <span class="badge bg-secondary">Feature</span>
    </div>
</div>
</button>`;
if (sstatus == "To Do") {
  $(htmloutput).appendTo("#to-do-tasks");
} else if (sstatus == "In Progress") {
  $(htmloutput).appendTo("#in-progress-tasks");
} else if (sstatus == "Done") {
  $(htmloutput).appendTo("#done-tasks");
}



 }
   




  addInputs()

  // displayInputs(title)




















// function savedata(){

    
//     let title = document.getElementById('task-title').value;
//     let bug = document.querySelector('#check').checked;
//     let Feature = document.querySelector('#check').checked;


//     // document.getElementById('check1').value;

//     let preority = document.getElementById('preo').value;
//     let status=document.getElementById('status').value;
//     //let date = document.getElementById('').value;
//     let content = document.getElementById('w3review').value;
   


//     // theTitle[theTitle.length]=title;  
//     // // theDate[theDate.length]=date ; 
//     // thePreority[thePreority.length]=preority;
//     // theContent[theContent.length]=content;
//     // theBugFeature[theBugFeature.length]=bugFeature;
//     // theStatus[theStatus.length]=status;


//     console.log(title,bugFeature,preority,status,content);
     
   
//   }


   
 
// function displayData() 
// {
//   let contenu="TTT"; // you need to  change the letiable name "hamza"
//   contenu+= [...theTitle]+"</br>";
  
//   document.getElementById('zaa').innerHTML = contenu; //theTitle is the id from modal html  "hamza"
// }  