document.querySelector('.add_btn').addEventListener('click',addTask);
document.querySelector('.tasks').addEventListener('click',removeTask);

var Tasks=[];


function addTask(){
    var task,html,newTask;
    task=document.querySelector('.task').value;
    newTask=new Task(task);
    Tasks.push(newTask);
    html='<div class="Task" id="%id">%task<button class="btn" >DELETE</button></div>'
    html=html.replace('%id',newTask.id);
    html=html.replace('%task',newTask.task);
    document.querySelector('.tasks').insertAdjacentHTML('beforeend',html);
    clearField();

}


var Task=function(task)
{
    this.task=task;
    var id=new Date();
    this.id=id.getTime();
}



function removeTask(e){
    var Id,el;
    Id=e.target.parentNode.id;
    el=document.getElementById(Id);
    el.parentNode.removeChild(el);
}


function clearField(){
    document.querySelector('.task').value="";
}