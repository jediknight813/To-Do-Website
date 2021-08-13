

const events = [{project: "⏰ Today ", date: "2021-09-01", task: "sad"},
{project: "⏰ Today ", date: "2021-08-12", task: "dsa"},
{project: "📆 Week ", date: "2021-08-14", task: "dasd"},
{project: "📆 Week ", date: "2021-08-13", task: "awdsa"}];


function project_page(project_name) {
    document.getElementById("page_title").innerHTML = project_name
    document.getElementById("screen_space").innerHTML = ''
}


function check_if_task_is_valid() {
    let task = document.getElementById('task').value
    let date = document.getElementById('date').value
    if (task.length < 1){
        return "not finished"
    }

    if (date.length < 1){
        return "not finished"
    }

    add_task()
}



function check_if_in_week(value) {

    let x = isThisWeek(value['date'])

    if (x == true) {
        add_current_tasks(value)
    }

}


function isThisToday(value) {

    let x = isThisDay(value['date'])

    if (x == true) {
        add_current_tasks(value)
    }

}


function check_if_task_is_in_month(value) {

    let x = isThisMonth(value['date'])

    if (x == true) {
        add_current_tasks(value)
    }

}



function check_if_in_Week() {
    events.forEach(check_if_in_week);
}

function check_if_in_Day() {
    events.forEach(isThisToday);
}


function check_if_in_Month() {
    events.forEach(check_if_task_is_in_month);
}






function populate_page_with_current_tasks() {
    events.forEach(add_correct_tasks_to_event);
}

function add_correct_tasks_to_event(value) {
    current_project = document.getElementById("page_title").innerHTML

    let x = isThisWeek(value['date'])

    if (value['project'] == current_project) {
        add_current_tasks(value)
    }

}


function add_current_tasks(value) {
    task = value['task']
    date = value['date']
    current_project = value['project'] 


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
        task_text.className = 'task_text_completed'
    //    this.parentNode.remove(this.parentNode)
    //    this.remove(this)
       reset_input_for_new_task()
     }


    task_text.innerText = task  
    date_box.innerText = "due: " + date  
    div.appendChild(check_box)
    div.appendChild(task_text)
    div.appendChild(date_box)
    document.getElementById("screen_space").appendChild(div)
    reset_input_for_new_task()
}



function reset_input_for_new_task() {
    document.getElementById('task').value = ''
    document.getElementById('date').value = ''
    document.getElementById('Finished').checked = false;
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
        task_text.className = 'task_text_completed'
    //    this.parentNode.remove(this.parentNode)
    //    this.remove(this)
       reset_input_for_new_task()
     }

     
    task_text.innerText = task  
    date_box.innerText = "due: " + date  
    div.appendChild(check_box)
    div.appendChild(task_text)
    div.appendChild(date_box)
    document.getElementById("screen_space").appendChild(div)
    reset_input_for_new_task()

}


function reset_input_for_new_task() {
    document.getElementById('task').value = ''
    document.getElementById('date').value = ''
}





function isThisWeek (date) {

    const DateArr = date.split("-")
    date = DateArr[2]
    month = DateArr[1]

    var d = new Date();
    var n = d.getDate();

    var p = d.getMonth();

    if (month > p+1){
        return false
    }

    if (date <= n+7) {
        console.log("here")
        return true

    }

  }





  function isThisDay (date) {

    const DateArr = date.split("-")
    date = DateArr[2]
    month = DateArr[1]

    var d = new Date();
    var n = d.getDate();

    var p = d.getMonth();

    if (month > p+1){
        return false
    }

    if (date == n) {
        return true

    }

  }

  function isThisMonth (date) {

    const DateArr = date.split("-")
    date = DateArr[2]
    month = DateArr[1]

    var d = new Date();
    var n = d.getDate();

    var p = d.getMonth();

    if (month > p+1){
        return false
    }

    if (date <= 31) {
        return true

    }

  }






  function add_project() {
    console.log(events)


   // task = document.getElementById('task').value
   // date = document.getElementById('date').value
    //current_project = document.getElementById("page_title").innerHTML
    //events.push({"project" : current_project, "date" : date, "task" : task})


    var div = document.createElement("div");
    var text_area = document.createElement("textarea");
    var add_project_button = document.createElement('button')
    var remove_project_button = document.createElement('button')



    remove_project_button.onclick = function(div){
            this.parentNode.remove(this.parentNode)
            this.remove(this)
     }



    add_project_button.onclick = function(div){
        let project_name = text_area.value
        if (project_name.length < 1){
            return "not finished"
            }

        add_project_to_sidebar(text_area.value)
        this.parentNode.remove(this.parentNode)
        this.remove(this)
     }



    div.className = 'project_area'
    text_area.className = 'textbox'
    add_project_button.className = 'project_button'
    remove_project_button.className = 'project_button'

    div.innerText = "New Project" 

    add_project_button.innerText = "add"
    remove_project_button.innerText = 'remove'
    div.appendChild(text_area)
    div.appendChild(add_project_button)
    div.appendChild(remove_project_button)
    document.getElementById("sidebarprojects").appendChild(div)

}




function add_all_current_projects() {
    events.forEach(populate_projects);
}

function populate_projects(data) {
    let x = data['project']
    if (x == "⏰ Today "){
        return "none"
    }

    if (x == "📅 Month  "){
        return "none"
    }

    if (x == "📆 Week "){
        return "none"
    }



    add_project_to_sidebar(x)
   
}




function add_project_to_sidebar(Project_title) {
    var div = document.createElement("button");
    div.className = 'Action_buttons'
    div.innerText = "📝 " + Project_title

    current_project = document.getElementById("page_title").innerHTML


    div.onclick = function(div){
        project_page(this.innerHTML)
        populate_page_with_current_tasks()
 }

    

    document.getElementById("sidebarprojects").appendChild(div);

}