let tasks, deletetask, update;

let taskdelete = function(tag){
	fetch('/tasks/delete/'+tag.className,{method: 'DELETE'});
	window.location.href = "/";
}
let redirect = function(tag){
	console.log(tag.className)
	window.location = "/tasks/update/" + tag.className;
}

function addNewTask(tag){
		if(document.getElementById('new-task').style.display === 'block'){
			document.getElementById('new-task').style.display = 'none';
			tag.innerText = 'Add New Task';
		}else{
			document.getElementById('new-task').style.display = 'block';
			tag.innerText = 'Close';
		}
	
	}
window.onload = () => {
	tasks = document.getElementById('tasks');



	fetch('/tasks/index').then((res)=>{
		res.json().then((data)=>{
			data.forEach((item)=>{
				tasks.innerHTML += `<p class='task-item'>${item.info}</p><button class=${item._id} onclick="redirect(this)">update</button><button onclick='taskdelete(this)' class=${item._id}>delete</button> <br/>`
			})
		})
	})



	
}


