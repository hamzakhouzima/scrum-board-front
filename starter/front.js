



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
            todo          : todo.value,
            preor

            
      }
       tasks.push(task);
      const onConfirmRefresh = function (event) {
        event.preventDefault();
      }
       console.log(tasks);
     
      }) 

      }




function displayInputs(){
  

for (let index = 0; index < tasks.length; index++) {
      document.getElementById(`${tasks.todo}`).innerHTML += `<button class="btn d-flex p-0  border-bottom">
      <div class="start p-2">
        <i class="bi bi-question-circle  text-success fs-2 "></i> 
      </div>
      <div class="text-start">
        <div class="fw-bolder" id="zaa">${tasks[index].title}</div>
        <div class="start-10">
          <div class="fw-light">#1 created in ${tasks[index].date}</div>
          <div class="fw-bold" title="">${tasks[index].description}</div>
        </div>
        <div class="">
          <span class="badge bg-primary">${tasks[index].preor}</span>
          <span class="badge bg-secondary">${tasks[index].checked}</span>
        </div>
      </div>
      </button>`;
      
        
}

 }
   




  addInputs()

  
  displayInputs()




















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