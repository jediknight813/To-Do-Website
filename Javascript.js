

const events = [{"project" : "War", "date" : "1/1/1", "task" : "eat food"}];


function project_page(project_name) {
    document.getElementById("page_title").innerHTML = project_name
}


function add_task() {
    console.log(events)

    task = document.getElementById('task').value
    date = document.getElementById('date').value
    current_project = document.getElementById("page_title").innerHTML
    events.push({"project" : current_project, "date" : date, "task" : task})


    var div = document.createElement("div");
    var task_text = document.createElement("div");
    var check_box = document.createElement('input')

    var date_box = document.createElement('div')

    date_box.type = "date"
    date_box.className = "date_box"

    task_text.className = 'task_text'
    check_box.type = 'checkbox'
    check_box.className = 'checkbox'
    check_box.id = "Finished"
    div.className = "task_background"


    check_box.onclick = function(div){
        this.parentNode.remove(this.parentNode)
        this.remove(this)
        reset_input_for_new_task()
    }

    task_text.innerText = task  
    date_box.innerText = date  
    div.appendChild(check_box)
    div.appendChild(task_text)
    div.appendChild(date_box)
    document.getElementById("screen").appendChild(div)
    reset_input_for_new_task()
}


function reset_input_for_new_task() {
    document.getElementById('task').value = ''
    document.getElementById('date').value = ''
    document.getElementById('Finished').checked = false;
}