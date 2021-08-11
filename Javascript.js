events = [{"project" : "War", "date" : "1/1/1", "task" : "eat food"},{"project" : "War", "date" : "1/1/1", "task" : "eat food"},{"project" : "War", "date" : "1/1/1", "task" : "eat food"}];



function to_add_task() {
    document.getElementById("page_title").innerHTML = current_project
    task = document.getElementById('task').value
    date = document.getElementById('date').value
    events += {"project" : current_project, "date" : date, "task" : task}
}


function project_page(project_name) {
    document.getElementById("page_title").innerHTML = project_name
    add_task(events[0])
}


function add_task() {
    events[0] = task

    let = project = task[0]
    let = date = task[1]
    let = task = task[2]


    var div = document.createElement("div");
    let btn = document.createElement("button");
    var check_box = document.createElement('input')
    check_box.type = 'checkbox'
    check_box.className = 'checkbox'
    check_box.id = "Finished"


    btn.onclick = function(div, btn){
        this.parentNode.remove(this.parentNode)
        this.remove(this)
        reset_input_for_new_book()
    }

    btn.innerHTML = "Task Finished"
    btn.className = 'finished_button'
    div.className = "task_background"
    div.innerText =  task +  project + date + 
    div.appendChild(check_box)
    div.appendChild(btn)
    document.getElementById("screen").appendChild(div)
    reset_input_for_new_book()
}


function reset_input_for_new_book() {
    document.getElementById('task').value = ''
    document.getElementById('date').value = ''
    document.getElementById('Finished').checked = false;

}